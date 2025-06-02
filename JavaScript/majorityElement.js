/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    let count = 0;
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = 1 + (hash[nums[i]] || 0);
        if (hash[nums[i]] > count) {
            majority = nums[i];
            count = hash[nums[i]];
        }
    }
    return majority;
};