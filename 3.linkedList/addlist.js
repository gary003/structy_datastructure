/*
add lists
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; 
this means that the least significant digit of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addLists = (head1, head2, plus = 0) => {
  if (head1 === null && head2 === null && plus === 0) return null

  const val1 = !!head1 ? head1.val : 0
  const val2 = !!head2 ? head2.val : 0

  const value = (val1 + val2 + plus) % 10
  plus = val1 + val2 + plus >= 10 ? 1 : 0

  const newNode = new Node(value)

  // console.log(val1, val2, value, plus)

  const next1 = !!head1 ? head1.next : null
  const next2 = !!head2 ? head2.next : null

  newNode.next = addLists(next1, next2, plus)

  // console.log(newNode)

  return newNode
}

//   621
// + 354
// -----
//   975
let a11 = new Node(1)
let a21 = new Node(2)
let a31 = new Node(6)
a11.next = a21
a21.next = a31
// 1 -> 2 -> 6
let b11 = new Node(4)
let b21 = new Node(5)
let b31 = new Node(3)
b11.next = b21
b21.next = b31
// 4 -> 5 -> 3
console.log(JSON.stringify(addLists(a11, b11))) // 5 -> 7 -> 9

//  7541
// +  32
// -----
//  7573
let a12 = new Node(1)
let a22 = new Node(4)
let a32 = new Node(5)
let a42 = new Node(7)
a12.next = a22
a22.next = a32
a32.next = a42
// 1 -> 4 -> 5 -> 7
let b12 = new Node(2)
let b22 = new Node(3)
b12.next = b22
// 2 -> 3
console.log(JSON.stringify(addLists(a12, b12))) // 3 -> 7 -> 5 -> 7

//   39
// + 47
// ----
//   86
let a13 = new Node(9)
let a23 = new Node(3)
a13.next = a23
// 9 -> 3
let b13 = new Node(7)
let b23 = new Node(4)
b13.next = b23
// 7 -> 4
console.log(JSON.stringify(addLists(a13, b13))) // 6 -> 8

//   89
// + 47
// ----
//  136
let a14 = new Node(9)
let a24 = new Node(8)
a14.next = a24
// 9 -> 8
let b14 = new Node(7)
let b24 = new Node(4)
b14.next = b24
// 7 -> 4
console.log(JSON.stringify(addLists(a14, b14))) // 6 -> 3 -> 1

//   999
//  +  6
//  ----
//  1005
let a15 = new Node(9)
let a25 = new Node(9)
let a35 = new Node(9)
a15.next = a25
a25.next = a35
// 9 -> 9 -> 9
let b15 = new Node(6)
// 6
console.log(JSON.stringify(addLists(a15, b15))) // 5 -> 0 -> 0 -> 1

// // recursive
// const addLists = (head1, head2, carry = 0) => {
//   if (head1 === null && head2 === null && carry === 0) return null

//   const val1 = head1 === null ? 0 : head1.val
//   const val2 = head2 === null ? 0 : head2.val

//   const sum = val1 + val2 + carry
//   const nextCarry = sum > 9 ? 1 : 0
//   const digit = sum % 10
//   const result = new Node(digit)

//   const next1 = head1 === null ? null : head1.next
//   const next2 = head2 === null ? null : head2.next

//   result.next = addLists(next1, next2, nextCarry)

//   return result
// }

// // n = length of list 1
// // m = length of list 2
// // Time: O(max(n, m))
// // Space: O(max(n, m))

// // iterative
// const addLists = (head1, head2) => {
//   const dummyHead = new Node(null)
//   let tail = dummyHead

//   let carry = 0
//   let current1 = head1
//   let current2 = head2
//   while (current1 !== null || current2 !== null || carry !== 0) {
//     const val1 = current1 === null ? 0 : current1.val
//     const val2 = current2 === null ? 0 : current2.val
//     const sum = val1 + val2 + carry
//     carry = sum > 9 ? 1 : 0

//     const digit = sum % 10
//     tail.next = new Node(digit)
//     tail = tail.next

//     if (current1 !== null) current1 = current1.next
//     if (current2 !== null) current2 = current2.next
//   }

//   return dummyHead.next
// }

// // n = length of list 1
// // m = length of list 2
// // Time: O(max(n, m))
// // Space: O(max(n, m))
