/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
    try{
        return Math.max(
            root.left !== null ? maxDepth(root.left) : 0,
            root.right !== null ? maxDepth(root.right) : 0
        ) + 1;
    } catch {
        return 0;
    }
};

/**
 * Stats
 * Runtime: 60 ms, faster than 78.07% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 37.2 MB, less than 28.69% of JavaScript online submissions for Maximum Depth of Binary Tree.
 */
