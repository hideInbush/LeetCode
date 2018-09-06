/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let newX = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  newX = newX < -Math.pow(2, 31) ? 0 : newX;
  newX = newX > Math.pow(2, 31) - 1 ? 0 : newX;
  return x >= 0 ? newX : -newX;
};