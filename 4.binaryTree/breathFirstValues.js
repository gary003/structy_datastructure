/*
breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
*/

const breadthFirstValues = (root) => {
  if (!root) return []

  const arr = []
  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    const nextValues = [currentNode.left, currentNode.right].filter((val) => !!val)

    arr.push(currentNode.val)

    queue.push(...nextValues)
  }

  return arr
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a1 = new Node("a")
const b1 = new Node("b")
const c1 = new Node("c")
const d1 = new Node("d")
const e1 = new Node("e")
const f1 = new Node("f")
a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(breadthFirstValues(a1)) //    -> ['a', 'b', 'c', 'd', 'e', 'f']

const a2 = new Node("a")
const b2 = new Node("b")
const c2 = new Node("c")
const d2 = new Node("d")
const e2 = new Node("e")
const f2 = new Node("f")
const g2 = new Node("g")
const h2 = new Node("h")

a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.right = f2
e2.left = g2
f2.right = h2
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h
console.log(breadthFirstValues(a2)) // -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const a3 = new Node("a")
//      a
console.log(breadthFirstValues(a3)) // -> ['a']

const a4 = new Node("a")
const b4 = new Node("b")
const c4 = new Node("c")
const d4 = new Node("d")
const e4 = new Node("e")
const x4 = new Node("x")

a4.right = b4
b4.left = c4
c4.left = x4
c4.right = d4
d4.right = e4

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

console.log(breadthFirstValues(a4)) // -> ['a', 'b', 'c', 'x', 'd', 'e']
