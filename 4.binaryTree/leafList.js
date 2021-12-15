/*
leaf list
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
*/

const leafList = (root) => {
  if (root === null) return []

  const stack = [root]
  let results = []

  while (stack.length > 0) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    const nextNodes = [currentNode.left, currentNode.right].filter((n) => !!n)
    //console.log(nextNodes)

    if (nextNodes.length === 0) {
      results = [currentNode.val, ...results]
      continue
    }

    stack.push(...nextNodes)
    // console.log(stack)
  }

  return results
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
const g = new Node("g")
const h = new Node("h")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(leafList(a)) // -> [ 'd', 'e', 'f' ]

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
f.right = h

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(leafList(a)) // -> [ 'd', 'g', 'h' ]
