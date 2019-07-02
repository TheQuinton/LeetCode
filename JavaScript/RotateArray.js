/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length - k,k));
};
/**
 * Stats
 * Runtime: 64 ms, faster than 91.74% of JavaScript online submissions for Rotate Array.
 * Memory Usage: 35.2 MB, less than 89.90% of JavaScript online submissions for Rotate Array.
 */
