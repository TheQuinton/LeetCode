/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    // let map = new Map();
    const dict = {};

    for(let i = 0; i < nums.length; i++) {
        // if(map.has(target - nums[i])) {
        //     return [map.get(target - nums[i]), i];
        // } else {
        //     map.set(nums[i], i);
        // }
        if (target-nums[i] in dict) {
            return [dict[target-nums[i]], i];
        } else {
            dict[nums[i]] = i;
        }
    }
};

/**
 * First version with Map performed slightly worse with memory usage.
 * Stats
 * Runtime: 56 ms, faster than 84.21% of JavaScript online submissions for Two Sum.
 * Memory Usage: 34.3 MB, less than 95.00% of JavaScript online submissions for Two Sum.
 */
