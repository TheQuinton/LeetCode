/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = grid => {
    const skyline = grid.length;
    let maxTopBottom = [];
    let maxLeftRight = [];
    let maxHeight = 0;

    for (let i = 0; i < skyline; i++){
        maxLeftRight.push(Math.max(...grid[i]));
        let vert = 0;
        for (let j = 0; j < skyline; j++){
            vert < grid[j][i] ? vert = grid[j][i] : null;
        }
        maxTopBottom.push(vert);
    }

    for (let i = 0; i < skyline; i++){
        for (let j = 0; j < skyline; j++){
            maxHeight += Math.min(maxTopBottom[i], maxLeftRight[j]) - grid[i][j];
        }
    }
    return maxHeight;
};

/**
 * Stats
 * Runtime: 64 ms, faster than 62.83% of JavaScript online submissions for Max Increase to Keep City Skyline.
 * Memory Usage: 35.4 MB, less than 53.84% of JavaScript online submissions for Max Increase to Keep City Skyline.
 */
