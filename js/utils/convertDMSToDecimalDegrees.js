// I've learned how to convert DMS to DD reading this article:
// https://support.esri.com/en/technical-article/000007058
function convertDMSToDecimalDegrees({ degree, minute, second }) {
  return degree + (minute / 60) + (second / 3600);
}
