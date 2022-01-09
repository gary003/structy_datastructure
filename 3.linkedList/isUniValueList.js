/*
is univalue list
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const isUnivalueList = (head, isUni = head.val) => {
  if (head === null) return true
  if (head.val !== isUni) return false
  return isUnivalueList(head.next, isUni)
}

const a1 = new Node(7)
const b1 = new Node(7)
const c1 = new Node(7)
a1.next = b1
b1.next = c1
// 7 -> 7 -> 7
console.log(isUnivalueList(a1)) // true

const a2 = new Node(7)
const b2 = new Node(7)
const c2 = new Node(4)
a2.next = b2
b2.next = c2
// 7 -> 7 -> 4
console.log(isUnivalueList(a2)) // false

const u1 = new Node(2)
const v1 = new Node(2)
const w1 = new Node(2)
const x1 = new Node(2)
const y1 = new Node(2)
u1.next = v1
v1.next = w1
w1.next = x1
x1.next = y1
// 2 -> 2 -> 2 -> 2 -> 2
console.log(isUnivalueList(u1)) // true

const u = new Node(2)
const v = new Node(2)
const w = new Node(3)
const x = new Node(3)
const y = new Node(2)
u.next = v
v.next = w
w.next = x
x.next = y
// 2 -> 2 -> 3 -> 3 -> 2
console.log(isUnivalueList(u)) // false

const z = new Node("z")
// z
console.log(isUnivalueList(z)) // true

/*
const isUnivalueList = (head) => {
  let current = head

  while (current !== null) {
    if (current.val !== head.val) return false
    current = current.next
  }

  return true
}
*/
