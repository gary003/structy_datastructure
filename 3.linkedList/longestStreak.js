/*
longest streak
Write a function, longestStreak, that takes in the head of a linked list as an argument. 
The function should return the length of the longest consecutive streak of the same value within the list.
*/

const longestStreak = (head, prevVal = null, currentStreak = 0, maxStreak = 0) => {
  if (head === null) return Math.max(currentStreak, maxStreak)

  if (head.val === prevVal) {
    return longestStreak(head.next, head.val, currentStreak + 1, maxStreak)
  } else {
    maxStreak = Math.max(currentStreak, maxStreak)
    return longestStreak(head.next, head.val, 1, maxStreak)
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(5)
const b = new Node(5)
const c = new Node(7)
const d = new Node(7)
const e = new Node(7)
const f = new Node(6)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
// 5 -> 5 -> 7 -> 7 -> 7 -> 6
console.log(longestStreak(a)) // 3

const a2 = new Node(3)
const b2 = new Node(3)
const c2 = new Node(3)
const d2 = new Node(3)
const e2 = new Node(9)
const f2 = new Node(9)
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2
// 3 -> 3 -> 3 -> 3 -> 9 -> 9
console.log(longestStreak(a2)) // 4

const a3 = new Node(9)
const b3 = new Node(9)
const c3 = new Node(1)
const d3 = new Node(9)
const e3 = new Node(9)
const f3 = new Node(9)
a3.next = b3
b3.next = c3
c3.next = d3
d3.next = e3
e3.next = f3
// 9 -> 9 -> 1 -> 9 -> 9 -> 9
console.log(longestStreak(a3)) // 3

const a4 = new Node(5)
const b4 = new Node(5)
a4.next = b4
// 5 -> 5
console.log(longestStreak(a4)) // 2

const a5 = new Node(4)
// 4
console.log(longestStreak(a5)) // 1

console.log(longestStreak(null)) // 0

/*
const longestStreak = (head) => {
  let maxStreak = 0
  let currentStreak = 0
  let currentNode = head
  let prevVal = null

  while (currentNode !== null) {
    if (currentNode.val === prevVal) {
      currentStreak += 1
    } else {
      currentStreak = 1
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak
    }

    prevVal = currentNode.val
    currentNode = currentNode.next
  }

  return maxStreak
}
*/
