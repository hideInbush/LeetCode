/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let counter = 1;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] + counter > 9) {
      digits[i] = 0;
      counter = 1;
    } else {
      digits[i] = digits[i] + counter;
      counter = 0;
      break;
    }
  }

  if (counter === 1) {
    digits.unshift(1);
  }
  return digits;
};