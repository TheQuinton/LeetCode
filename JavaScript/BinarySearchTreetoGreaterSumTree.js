/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = root => {
    let acc = 0;
    const convertNode = node => {
        if(node.right !== null) convertNode(node.right);
        acc = (node.val += acc);
        if(node.left !== null) convertNode(node.left);
    }
    convertNode(root);
    return root;
};
/**
 * Stats
 * Runtime: 64 ms, faster than 18.96% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
 */
