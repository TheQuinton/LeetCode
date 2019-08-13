/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
    let acc = 0;
    const convertNode = node => {
        if(L <= node.val && node.val <= R) acc += node.val;
        if(node.right !== null) convertNode(node.right);
        if(node.left !== null) convertNode(node.left);
    }
    convertNode(root);
    return acc;
};

/**
 * Stats
 * Runtime: 152 ms, faster than 95.50% of JavaScript online submissions for Range Sum of BST.
 * Memory Usage: 67.1 MB, less than 50.00% of JavaScript online submissions for Range Sum of BST.
 */
