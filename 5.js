/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const reverseS = s.split('').reverse().join('')
  let result = '', len = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sliceS = s.slice(i, j + 1);
      if (sliceS.length > len) {
        if (reverseS.indexOf(sliceS) >= 0 &&
        sliceS === sliceS.split('').reverse().join('')) {
          len = sliceS.length;
          result = sliceS;
        }
      }
    }
  }
  return result;
};
