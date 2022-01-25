/*
middle value
Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list.
If the linked list has an even number of nodes, then return the value of the second middle node.
You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const linkedListSize = (head) => {
  const nextVal = head.next ? linkedListSize(head.next) : 0
  let size = 1 + nextVal
  return size
}

const getNode = (head, idx, currentIdx) => {
  if (head === null) return null
  if (currentIdx === idx) return head.val
  return getNode(head.next, idx, currentIdx + 1)
}

const middleValue = (head) => {
  const listSize = linkedListSize(head)

  const middleIndex = Math.floor(listSize / 2)

  const middleValue = getNode(head, middleIndex, 0)

  // console.log({middleValue})

  return middleValue
}

const a1 = new Node("a")
const b1 = new Node("b")
const c1 = new Node("c")
const d1 = new Node("d")
const e1 = new Node("e")
a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
// a -> b -> c -> d -> e
console.log(middleValue(a1)) // c

const a2 = new Node("a")
const b2 = new Node("b")
const c2 = new Node("c")
const d2 = new Node("d")
const e2 = new Node("e")
const f2 = new Node("f")
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2
// a -> b -> c -> d -> e -> f
console.log(middleValue(a2)) // d

const x3 = new Node("x")
const y3 = new Node("y")
const z3 = new Node("z")
x3.next = y3
y3.next = z3
// x -> y -> z
console.log(middleValue(x3)) // y

const x4 = new Node("x")
const y4 = new Node("y")
x4.next = y4
// x -> y
console.log(middleValue(x4)) // y

const q5 = new Node("q")
// q
console.log(middleValue(q5)) // q

// // using an array
// const middleValue = (head) => {
//   const values = []

//   let current = head
//   while (current !== null) {
//     values.push(current.val)
//     current = current.next
//   }

//   return values[Math.floor(values.length / 2)]
// }

// // n = number of nodes
// // Time: O(n)
// // Space: O(n)

// // using two pointers
// const middleValue = (head) => {
//   let fast = head
//   let slow = head

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next
//     fast = fast.next.next
//   }

//   return slow.val
// }

// // n = number of nodes
// // Time: O(n)
// // Space: O(1)
