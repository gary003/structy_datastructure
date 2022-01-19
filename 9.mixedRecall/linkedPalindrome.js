/*
linked palindrome
Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list is a palindrome. 
A palindrome is a sequence that is the same both forwards and backwards.
*/

const linkedPalindrome = (head) => {
  const arr = []

  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }

  return arr.join("-") === arr.reverse().join("-")
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a1 = new Node(3)
const b1 = new Node(2)
const c1 = new Node(7)
const d1 = new Node(7)
const e1 = new Node(2)
const f1 = new Node(3)
a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
e1.next = f1
// 3 -> 2 -> 7 -> 7 -> 2 -> 3
console.log(linkedPalindrome(a1)) // true

const a2 = new Node(3)
const b2 = new Node(2)
const c2 = new Node(4)
a2.next = b2
b2.next = c2
// 3 -> 2 -> 4
console.log(linkedPalindrome(a2)) // false

const a3 = new Node(3)
const b3 = new Node(2)
const c3 = new Node(3)
a3.next = b3
b3.next = c3
// 3 -> 2 -> 3
console.log(linkedPalindrome(a3)) // true

const a4 = new Node(0)
const b4 = new Node(1)
const c4 = new Node(0)
const d4 = new Node(1)
const e4 = new Node(0)
a4.next = b4
b4.next = c4
c4.next = d4
d4.next = e4
// 0 -> 1 -> 0 -> 1 -> 0
console.log(linkedPalindrome(a4)) // true

const a5 = new Node(0)
const b5 = new Node(1)
const c5 = new Node(0)
const d5 = new Node(1)
const e5 = new Node(1)
a5.next = b5
b5.next = c5
c5.next = d5
d5.next = e5
// 0 -> 1 -> 0 -> 1 -> 1
console.log(linkedPalindrome(a5)) // false

const a = new Node(5)
// 5
console.log(linkedPalindrome(a)) // true

console.log(linkedPalindrome(null)) // true
