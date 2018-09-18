/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i -= 1) {
    if (m > 0 && n <= 0) {
      return nums1;
    } else if (m <= 0 && n > 0 ) {
      for (let j = 0; j < n; j += 1) {
        nums1[j] = nums2[j];
      }
      return nums1;
    } else if(m > 0 && n > 0) {
      if (nums1[m - 1] > nums2[n - 1]) {
        nums1[i] = nums1[m - 1];
        m = m - 1;
      } else {
        nums1[i] = nums2[n - 1];
        n = n - 1;
      }
    }
  }
};

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));