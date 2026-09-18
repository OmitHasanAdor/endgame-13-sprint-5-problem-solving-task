// 01. Remove Duplicates from Sorted Array
var checkSubarraySum = function(nums, k) {
      // your code goes here
    let unique = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[unique] = nums[i]
            unique++
        }
    }
    return unique
};
