/*
给定一个字符串，找出不含有重复字符的最长子串的长度。
示例：
给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
*/
/**
 * @param {string} s
 * @return {number}
 */

//暴力解法
var lengthOfLongestSubstring_1 = function(s) {
  if (typeof s === 'string') {
    let max = 0;
    for (let i = 0, sLen = s.length; i < sLen; i += 1) {
      let sub = s[i];
      for (let j = i + 1; j < sLen; j += 1) {
        if (sub.indexOf(s[j]) === -1) {
          sub += s[j];
        } else {
          break;
        }
      }
      max = sub.length > max ? sub.length : max;
    }
    return max;
  } else {
    return;
  }
};

//解法2
var lengthOfLongestSubstring_2 = function(s) {
  if (s.length < 1) {
    return 0;
  }
  let i = 0;
  let j = 1;
  let longest = 1;
  while (j < s.length) {
    if (s.slice(i, j).indexOf(s.charAt(j)) > -1) {
      i += s.slice(i, j).indexOf(s.charAt(j)) + 1;
    } else {
      longest = Math.max(j - i + 1, longest);
    }
    j++;
  }
  return longest;
};

