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

// reviewed/revisited
// The number of rotations k is updated to k % n to handle cases where k is greater than n. 
// This ensures that rotating the array n times results in the same array, so any extra rotations beyond n can be ignored.
// If k is 0, the array does not need to be rotated, and the function can exit early. This is an optimization step to avoid unnecessary operations.
var rotate1 = function(nums, k) {
    const n = nums.length;
    k %= n;
    if (k !== 0) {
        nums.unshift(...nums.slice(-k));
        nums.splice(n, k);    
    }
};