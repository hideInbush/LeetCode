var twoSum = function(nums, target) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let match = target - current;
    if (match in numsObj) {
      return [i, numsObj[match]];
    }
    numsObj[current] = i;
  }
}