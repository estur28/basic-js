const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catty = '^^';
  const sumCat = 0;
  const newMatrix= matrix.flat( Infinity );
  return newMatrix.reduce((sumCat, b) => sumCat + (b == catty), 0);
}
  

