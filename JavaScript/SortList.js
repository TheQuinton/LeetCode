/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = head => {
    if(head === null) return head;

    let arr = [];
    const destruct = node => {
        arr.push(node.val);
        if (node.next !== null) destruct(node.next);
    }
    destruct(head);

    arr.sort((a,b) => a-b);

    const sortNode = node => {
        node.val = arr.shift();
        if (node.next !== null) sortNode(node.next);
    }
    sortNode(head);
    return head;
};
/**
 * Stats
 * Runtime: 100 ms, faster than 51.32% of JavaScript online submissions for Sort List.
 * Memory Usage: 43 MB, less than 11.11% of JavaScript online submissions for Sort List.
 */
