/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
    const jewels = new Set(J);
    return [...S].filter(s =>jewels.has(s)).length;
};

/**
 * Stats
 * Runtime: 60 ms, faster than 57.49% of JavaScript online submissions for Jewels and Stones.
 * Memory Usage: 34.1 MB, less than 62.69% of JavaScript online submissions for Jewels and Stones.
 */
