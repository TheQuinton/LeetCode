/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
    if (intervals.length < 2) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        curr = intervals[i];
        prev = intervals[i-1];
        if(curr[0] <= prev[1]){
            intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])];
            intervals.splice(i-1,1);
            i--;
        }
    }
    return intervals;
};
/**
 * Stats
 * Runtime: 84 ms, faster than 35.86% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 37.9 MB, less than 22.45% of JavaScript online submissions for Merge Intervals.
 */
