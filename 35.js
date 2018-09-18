/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i += 1) {
    if (i === 0 && nums[i] > target) {
      return 0;
    }
    
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target && nums[i+1] > target) {
      return i + 1;
    }
  }

  return nums.length;
};