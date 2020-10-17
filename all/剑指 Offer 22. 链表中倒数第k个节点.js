/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  if(!head) return head
  let p1 = head,p2 = head
  while(k >= 0) {
    p1 = p1.next
  }

  while(p1) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2
};