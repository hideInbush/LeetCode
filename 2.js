/**
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //思路1：将单个链表的值存入数组，反转数组，组成一个新的数，最后两个数相加
var addTwoNumbers = function(l1, l2) {
  let flag = 0;
  let head = null;
  let temp = null;

  while (l1 || l2) {
    let sum = flag;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    const obj = new ListNode(sum % 10);
    if (head === null) {
      head = obj;
      temp = obj;
    } else {
      temp.next = obj;
      temp = obj;
    }

    //处理进位
    flag = 0;
    if (sum >= 10) {
      flag = 1;
    }
  }

  if (flag === 1) {
    const result = new ListNode(1);
    temp.next = result;
    temp = result;
  }

  return head;
};