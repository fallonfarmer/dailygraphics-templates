/*
 * Basic Javascript helpers used in analytics.js and graphics code.
 */

module.exports = {
  classify: require("./classify"),
  COLORS: require("./colors"),
  d3formats: require("./d3formats"),
  formatStyle: require("./formatStyle"),
  fmtComma: require("./fmtComma"),
  getAPMonth: require("./getAPMonth"),
  getLocation: require("./getLocation"),
  getParameterByName: require("./getParameterByName"),
  isProduction: require("./isProduction"),
  makeTranslate: require("./makeTranslate"),
  urlToLocation: require("./urlToLocation"),
  wrapText: require("./wrapText")
}
