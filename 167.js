/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var hash = {};
  for (var i = 0, len = numbers.length; i < len; i++) {
    var item = target - numbers[i];
    if (hash[item] === undefined) {
      hash[numbers[i]] = i;
      continue;
    }
    return [hash[item] + 1, i + 1];
  }
};

console.log(twoSum([2, 7, 11, 15], 9));