/*
all tree paths
Write a function, allTreePaths, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.
You may assume that the input tree is non-empty.
*/

const allTreePaths = (root) => {
  if (root === null) return null

  const stack = [[root]]
  const results = []

  while (stack.length > 0) {
    const currentPath = stack.pop()
    // console.log(currentPath)

    const nextNodes = [currentPath[currentPath.length - 1].left, currentPath[currentPath.length - 1].right].filter((n) => !!n)
    //console.log(nextNodes)

    if (nextNodes.length === 0) {
      results.push(currentPath.map((cp) => cp.val))
      continue
    }

    stack.push(...nextNodes.map((nn) => [...currentPath, nn]))
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
const i = new Node("i")

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

console.log(allTreePaths(a)) // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e', 'g' ],
//   [ 'a', 'b', 'e', 'h' ],
//   [ 'a', 'c', 'f', 'i' ]
// ]
