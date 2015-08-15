var dateFromISO = require('./dateFromISO.js')

module.exports = function (time) {

  var date = null

  if (time && typeof time.getTime === 'function') {
    date = time
  } else if (typeof time === 'number') {
    date = new Date(time * 1000)
  } else if (typeof time === 'string') {
    date = dateFromISO(time)
  }

  if (date !== null) {

    var diff = (((new Date()).getTime() - date.getTime()) / 1000)
    var day_diff = Math.floor(diff / 86400)

    if (!isNaN(day_diff) && day_diff >= 0) {

      return day_diff == 0 && (
      diff < 60 && "now" || diff < 120 && "1m" || diff < 3600 && Math.floor(diff / 60) + "m" || diff < 7200 && "1h" || diff < 86400 && Math.floor(diff / 3600) + "h") || day_diff == 1 && "1d" || day_diff < 7 && day_diff + "d" || day_diff < 31 && Math.floor(day_diff / 7) + "w" || day_diff < 360 && Math.floor(day_diff / 30) + "mo" || Math.floor(day_diff / 360) + "y";
    }
  }
}
