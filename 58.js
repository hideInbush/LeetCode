/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim() ? s.trim().split(' ').reverse()[0].length : 0;
};