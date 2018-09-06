/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  } 
  strs.sort(function(a, b){return a.length > b.length});

  var prefix = '';
  var minStr = strs[0];
  for (var i = 1; i <= minStr.length; i += 1) {
    var flag = true;
    for (var j = 1; j < strs.length; j += 1) {
      if (!strs[j].startsWith(minStr.substr(0, i))) {
        flag = false;
      } 
    }

    if (flag) {
      prefix = minStr.substr(0, i);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["dog","racecar","car"]));