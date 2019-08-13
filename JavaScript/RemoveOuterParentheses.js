/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = S => {
    let counter = 0;
    let result = '';

    for (let i = 0; i < S.length; i++) {
        if ((S[i] === '(' && counter++ !== 0) || (S[i] === ')' && --counter !== 0)) {
            result += S[i];
        }
    }

    return result;
};

/**
 * Stats
 * Runtime: 64 ms, faster than 49.61% of JavaScript online submissions for Remove Outermost Parentheses.
 * Memory Usage: 36 MB, less than 61.11% of JavaScript online submissions for Remove Outermost Parentheses.
 */
