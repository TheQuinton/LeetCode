/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
    if(root === null) return new TreeNode(val);
    val < root.val ? root.left = insertIntoBST(root.left, val) : root.right = insertIntoBST(root.right, val);
    return root;
};

/**
 * Stats
 * Runtime: 108 ms, faster than 75.25% of JavaScript online submissions for Insert into a Binary Search Tree.
 * Memory Usage: 41.8 MB, less than 89.19% of JavaScript online submissions for Insert into a Binary Search Tree.
 */
