/*=================================================
=            Format helpers for charts            =
=================================================*/
var d3 = {
    ...require("d3-format/dist/d3-format.min"),
    ...require("d3-time/dist/d3-time.min"),
    ...require("d3-time-format/dist/d3-time-format.min")
};
module.exports = {
    commaFormat: d3.format(',.0f'),
    decimalFormat: d3.format(',.2f'),
    percentFormat: d3.format(',%'),
    parseUTCISODate: d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),
    parseDate: d3.timeParse("%Y-%m-%d"),
    dateFormat: d3.timeFormat("%Y-%m-%d"),
    parseYear: d3.timeParse("%Y"),
    monthFormat: d3.timeFormat("%m/%Y"),
    monthNameFormat: d3.timeFormat("%B %Y"),
    yearFormat: d3.timeFormat("%Y"),
}