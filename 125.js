/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const lowerStr = s.replace(/\W/g, '').toLowerCase();
  const len = lowerStr.length;
  return len % 2 === 0 ?
      lowerStr.substr(0, len / 2) === lowerStr.substr(len / 2).split('').reverse().join('')
      :
      lowerStr.substr(0, len / 2) === lowerStr.substr(len / 2 + 1).split('').reverse().join('')
};

console.log(isPalindrome("race a car"));