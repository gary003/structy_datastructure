/*
sum list
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head, sum = 0) => {
  if (!head) return sum
  sum += head.val
  return sumList(head.next, sum)
}
