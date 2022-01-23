/*
linked list cycle
Write a function, linkedListCycle, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains a cycle.
*/

const linkedListCycle = (head, lastValues = new Set()) => {
  if (head === null) return false
  if (lastValues.has(head.val)) return true

  lastValues.add(head.val)

  return linkedListCycle(head.next, lastValues)
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
a.next = b
b.next = c
c.next = d
d.next = b // cycle
//         _______
//       /        \
// a -> b -> c -> d
console.log(linkedListCycle(a)) // true

const q = new Node("q")
const r = new Node("r")
const s = new Node("s")
const t = new Node("t")
const u = new Node("u")
q.next = r
r.next = s
s.next = t
t.next = u
u.next = q // cycle
//    ________________
//  /                 \
// q -> r -> s -> t -> u
console.log(linkedListCycle(q)) // true

const a2 = new Node("a")
const b2 = new Node("b")
const c2 = new Node("c")
const d2 = new Node("d")
a2.next = b2
b2.next = c2
c2.next = d2
// a -> b -> c -> d
console.log(linkedListCycle(a2)) // false

const q2 = new Node("q")
const r2 = new Node("r")
const s2 = new Node("s")
const t2 = new Node("t")
const u2 = new Node("u")
q2.next = r2
r2.next = s2
s2.next = t2
t2.next = u2
u2.next = t2 // cycle
//                   __
//                 /   \
// q -> r -> s -> t -> u
console.log(linkedListCycle(q2)) // true

const p = new Node("p")
// p
console.log(linkedListCycle(p)) // false

console.log(linkedListCycle(null)) // false

// const linkedListCycle = (head) => {
//   const nodes = new Set()

//   let current = head
//   while (current !== null) {
//     if (nodes.has(current)) return true
//     nodes.add(current)
//     current = current.next
//   }

//   return false
// }
// // n = number of nodes
// // Time: O(n)
// // Space: O(n)

// // using two pointers
// const linkedListCycle = (head) => {
//   let slow = head
//   let fast = head
//   let firstIteration = true
//   while (fast !== null && fast.next !== null) {
//     if (slow === fast && !firstIteration) return true

//     slow = slow.next
//     fast = fast.next.next
//     firstIteration = false
//   }

//   return false
// }

// // n = number of nodes
// // Time: O(n)
// // Space: O(1)
