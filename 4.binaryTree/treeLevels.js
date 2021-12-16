/*
tree levels
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

const treeLevels = (root) => {
  if (root === null) return []

  const stack = [[root, 0]]

  const levels = {}

  while (stack.length > 0) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    if (!levels[currentNode[1]]) levels[currentNode[1]] = []
    levels[currentNode[1]].push(currentNode[0].val)

    if (!!currentNode[0].left) {
      stack.unshift([currentNode[0].left, currentNode[1] + 1])
    }

    if (!!currentNode[0].right) {
      stack.unshift([currentNode[0].right, currentNode[1] + 1])
    }
    // console.log(stack)
  }

  return Object.values(levels)
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
const i = new Node("i")

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

console.log(treeLevels(a)) // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
e.right = h
f.left = i

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

console.log(treeLevels(a)) // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]
