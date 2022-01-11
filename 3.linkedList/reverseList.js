/*
reverse list

Write a function, reverseList, that takes in the head of a linked list as an argument. 
The function should reverse the order of the nodes in the linked list in-place 
and return the new head of the reversed linked list.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/******************************
 *** recursive way 1  *********
 *****************************/
const reverseList = (head, memorizedNode = null) => {
  if (!head) return memorizedNode
  const next = head.next
  head.next = memorizedNode
  return reverseList(next, head)
}

/*****************************
 *** iterative way ***********
 *****************************/
const reverseList = (head) => {
  let memorizedNode = null

  while (head) {
    const next = head.next
    head.next = memorizedNode
    memorizedNode = head
    head = next
  }

  return memorizedNode
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
// a -> b -> c -> d -> e -> f
console.log(reverseList(a)) // f -> e -> d -> c -> b -> a

const x = new Node("x")
const y = new Node("y")
x.next = y
// x -> y
console.log(reverseList(x)) // y -> x

const p = new Node("p")
// p
console.log(reverseList(p)) // p
