/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length === 0) {
    return nums;
  }

  if (k === 0) {
    return nums;
  }

  const head = nums.slice(0, nums.length - k);
  const tail = nums.slice(nums.length - k);

  nums = tail.concat(head);
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));