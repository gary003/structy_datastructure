/*
reverse list

Write a function, reverseList, that takes in the head of a linked list as an argument. 
The function should reverse the order of the nodes in the linked list in-place 
and return the new head of the reversed linked list.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/******************************
 *** recursive way 1  *********
 *****************************/
const reverseList = (head, memorizedNode = null) => {
  console.log(head)
  if (!head) return memorizedNode
  const next = head.next
  head.next = memorizedNode
  return reverseList(next, head)
}

/*****************************
 *** iterative way ***********
 *****************************/
const reverseList = (head) => {
  console.log(head)

  let memorizedNode = null

  while (head) {
    const next = head.next
    head.next = memorizedNode
    memorizedNode = head
    head = next
  }

  return memorizedNode
}
