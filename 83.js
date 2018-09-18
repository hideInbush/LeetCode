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
var deleteDuplicates = function(head) {
  const array = [];
  while(head) {
    if (!array.includes(head.val)){
      array.push(head.val);
    }
    head = head.next;
  }

  if (array.length === 0) {
    return [];
  }

  let preNode;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const node = new ListNode(array[i]);
    if (preNode) {
      node.next = preNode;
    }
    preNode = node;
  }

  return preNode;
};