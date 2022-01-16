/*
merge lists
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. 
The function should return the head of the merged linked list.
Do this in-place, by mutating the original Nodes.
You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const findValInList = (headL, target) => {
  if (headL === null) return null
  if (headL.val >= target) return -1
  if (headL.val < target) return headL

  return findValInList(headL.next, target)
}

const mergeLists = (head1, head2, origin = head1) => {
  const memoHead1 = { ...head1 }
  let memoHead2 = { ...head2 }

  const val = head2.val
  let headInsertion = findValInList(head1, val)
  if (headInsertion === -1) return mergeLists(head2, head1, (origin = head2))

  const memoHeadInsert = { ...headInsertion }

  headInsertion.next = head2

  while (headInsertion.next !== null && headInsertion.next.val > memoHeadInsert.val && !!memoHeadInsert.next && headInsertion.next.val <= memoHeadInsert.next.val) {
    headInsertion = headInsertion.next
    memoHead2 = memoHead2.next
  }

  headInsertion.next = memoHeadInsert.next

  if (memoHead1.next === null || memoHead2 === null) {
    if (memoHead1.next === null && memoHead2 !== null) head1.next = memoHead2
    if (memoHead1.next !== null && memoHead2 === null) head2 = memoHead1.next
    return origin
  }

  return mergeLists(memoHead1.next, memoHead2, origin)
}

const a = new Node(5)
const b = new Node(7)
const c = new Node(10)
const d = new Node(12)
const e = new Node(20)
const f = new Node(28)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6)
const r = new Node(8)
const s = new Node(9)
const t = new Node(25)
q.next = r
r.next = s
s.next = t
// 6 -> 8 -> 9 -> 25

console.log(JSON.stringify(mergeLists(a, q)))
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28

const a2 = new Node(5)
const b2 = new Node(7)
const c2 = new Node(10)
const d2 = new Node(12)
const e2 = new Node(20)
const f2 = new Node(28)
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q2 = new Node(1)
const r2 = new Node(8)
const s2 = new Node(9)
const t2 = new Node(10)
q2.next = r2
r2.next = s2
s2.next = t2
// 1 -> 8 -> 9 -> 10

console.log(JSON.stringify(mergeLists(a2, q2)))
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28

const h3 = new Node(30)
// 30

const p3 = new Node(15)
const q3 = new Node(67)
p3.next = q3
// 15 -> 67

console.log(JSON.stringify(mergeLists(h3, p3)))
// 15 -> 30 -> 67

// const mergeLists = (head1, head2) => {
//   let dummyHead = new Node(null)
//   let tail = dummyHead
//   let current1 = head1
//   let current2 = head2

//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       tail.next = current1
//       current1 = current1.next
//     } else {
//       tail.next = current2
//       current2 = current2.next
//     }
//     tail = tail.next
//   }

//   if (current1 !== null) tail.next = current1
//   if (current2 !== null) tail.next = current2

//   return dummyHead.next
// }
// // n = length of list 1
// // m = length of list 2
// // Time: O(min(n, m))
// // Space: O(1)
// // recursive
// const mergeLists = (head1, head2) => {
//   if (head1 === null && head2 === null) return null
//   if (head1 === null) return head2
//   if (head2 === null) return head1

//   if (head1.val < head2.val) {
//     const next1 = head1.next
//     head1.next = mergeLists(next1, head2)
//     return head1
//   } else {
//     const next2 = head2.next
//     head2.next = mergeLists(head1, next2)
//     return head2
//   }
// }
// // n = length of list 1
// // m = length of list 2
// // Time: O(min(n, m))
// // Space: O(min(n, m))
