/*
depth first values
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
*/

const depthFirstValues = (root) => {
  if (!root) return []

  const arr = []
  let stack = [root]

  while (stack.length > 0) {
    const currentValue = stack.pop()

    arr.push(currentValue.val)

    const nextValues = [currentValue.right, currentValue.left].filter((val) => !!val)

    stack = [...stack, ...nextValues]
  }

  return arr
}

// const depthFirstValues = (root, res = []) => {
//   if (root === null) return []

//   res.push(root.val)

//   const left = depthFirstValues(root.left)
//   const right = depthFirstValues(root.right)

//   return [res, ...left, ...right].flat()
// }

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a0 = new Node("a")
const b0 = new Node("b")
const c0 = new Node("c")
const d0 = new Node("d")
const e0 = new Node("e")
const f0 = new Node("f")
a0.left = b0
a0.right = c0
b0.left = d0
b0.right = e0
c0.right = f0
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(depthFirstValues(a0)) // -> ['a', 'b', 'd', 'e', 'c', 'f']

const a1 = new Node("a")
const b1 = new Node("b")
const c1 = new Node("c")
const d1 = new Node("d")
const e1 = new Node("e")
const f1 = new Node("f")
const g1 = new Node("g")
a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1
e1.left = g1
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g
console.log(depthFirstValues(a1)) //  -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']

const a2 = new Node("a")
console.log(depthFirstValues(a2)) // -> ['a']

const a3 = new Node("a")
const b3 = new Node("b")
const c3 = new Node("c")
const d3 = new Node("d")
const e3 = new Node("e")
a3.right = b3
b3.left = c3
c3.right = d3
d3.right = e3
//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e
console.log(depthFirstValues(a3)) // -> ['a', 'b', 'c', 'd', 'e']

console.log(depthFirstValues(null)) // -> []
