/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
    // return str
    //     .split('')
    //     .map(ch => String.fromCharCode(ch.charCodeAt(0) | 0x20))
    //     .join('');
    let newstr = '';
    for (let i = 0; i < str.length; i++){
        newstr += String.fromCharCode(str.charCodeAt(i) | 0x20);
    }
    return newstr;
};
/**
 * The hex code for letter 'A' is 0x41 and for letter 'a' is 0x61, that's a difference of 0x20.
 * Commented out version was slower with Runtime: 52 ms and Memory Usage:33.9 MB
 * Stats
 *  Runtime: 44 ms, faster than 96.54% of JavaScript online submissions for To Lower Case.
 *  Memory Usage: 33.8 MB, less than 61.94% of JavaScript online submissions for To Lower Case.
 */
