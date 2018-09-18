/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1
    } else if (map[nums[i]]) {
      delete map[nums[i]]
    }
  }
  
  for (let i in map) {
    return Number(i)
  }
};

console.log(singleNumber([4,1,2,1,2]));