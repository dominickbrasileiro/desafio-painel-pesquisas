// I've learned how to convert DMS to DD reading this article:
// https://support.esri.com/en/technical-article/000007058
function convertDMSToDecimalDegrees({ degree, minute, second }) {
  const decimalDegrees = degree + (minute / 60) + (second / 3600);

  return decimalDegrees.toPrecision(7);
}
