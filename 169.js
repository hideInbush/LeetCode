/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort();

  let count = 1;
  let curr = nums[0];
  for (let i = 1, len = nums.length; i < len; i += 1) {
    if (nums[i] === curr) {
      count += 1;

      if (count > len / 2) {
        return curr;
      }
    } else {
      curr = nums[i];
      count = 1;
    }
  }

  return curr;
};

console.log(majorityElement([2,2,1,1,1,2,2]));