/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    // -> Why does this work? <-
    // XOR is commutative, a ^ b = b ^ a.
    // A number XOR by another number twice makes no change on original number, a ^ b ^ b = a
    // Therefore, if a number appears twice in the array, it makes no change to result.
    // And if a number is unique, since 0 ^ unique = unique, so result = unique
    return nums.reduce((prev , curr) => prev ^= curr);
};

/**
 * Stats
 * Runtime: 52 ms, faster than 93.88% of JavaScript online submissions for Single Number.
 * Memory Usage: 35.4 MB, less than 76.92% of JavaScript online submissions for Single Number.
 */
