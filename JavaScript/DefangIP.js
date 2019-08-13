/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => {
    return address.split('.').join('[.]');
};


/**
 * Stats
 * Runtime: 52 ms, faster than 70.39% of JavaScript online submissions for Defanging an IP Address.
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
 */
