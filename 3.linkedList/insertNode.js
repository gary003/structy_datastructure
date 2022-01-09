/*
insert node
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
The function should insert a new node with the value into the list at the specified index. 
Consider the head of the linked list as index 0. 
The function should return the head of the resulting linked list.
Do this in-place.
You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

const insertNode = (head, value, insertionIdx, listIndex = 1, origin = head) => {
  if (head === null) return origin

  if (insertionIdx === 0) {
    const newNode = new Node(value)
    newNode.next = head
    return newNode
  }

  if (listIndex === insertionIdx) {
    const memoHead = { ...head }
    const newNode = new Node(value)
    newNode.next = !!memoHead.next ? memoHead.next : null
    head.next = newNode
    return origin
  }

  return insertNode(head.next, value, insertionIdx, listIndex + 1, origin)
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a1 = new Node("a")
const b1 = new Node("b")
const c1 = new Node("c")
const d1 = new Node("d")
a1.next = b1
b1.next = c1
c1.next = d1
// a -> b -> c -> d
console.log(JSON.stringify(insertNode(a1, "x", 2))) // a -> b -> x -> c -> d

const a2 = new Node("a")
const b2 = new Node("b")
const c2 = new Node("c")
const d2 = new Node("d")
a2.next = b2
b2.next = c2
c2.next = d2
// a -> b -> c -> d
console.log(JSON.stringify(insertNode(a2, "v", 3))) // a -> b -> c -> v -> d

const a3 = new Node("a")
const b3 = new Node("b")
const c3 = new Node("c")
const d3 = new Node("d")
a3.next = b3
b3.next = c3
c3.next = d3
// a -> b -> c -> d
console.log(JSON.stringify(insertNode(a3, "m", 4))) // a -> b -> c -> d -> m

const a4 = new Node("a")
const b4 = new Node("b")
a4.next = b4
// a -> b
console.log(JSON.stringify(insertNode(a4, "z", 0))) // z -> a -> b

// // iterative
// const insertNode = (head, value, index) => {
//   if (index === 0) {
//     const newHead = new Node(value)
//     newHead.next = head
//     return newHead
//   }

//   let count = 0
//   let current = head
//   while (current !== null) {
//     if (count === index - 1) {
//       const next = current.next
//       current.next = new Node(value)
//       current.next.next = next
//     }

//     count += 1
//     current = current.next
//   }
//   return head
// }

// // n = number of nodes
// // Time: O(n)
// // Space: O(1)
// // recursive

// // recursive
// const insertNode = (head, value, index, count = 0) => {
//   if (index === 0) {
//     const newHead = new Node(value)
//     newHead.next = head
//     return newHead
//   }

//   if (count === index - 1) {
//     const next = head.next
//     head.next = new Node(value)
//     head.next.next = next
//     return head
//   }

//   insertNode(head.next, value, index, count + 1)
//   return head
// }

// // n = number of nodes
// // Time: O(n)
// // Space: O(n)
