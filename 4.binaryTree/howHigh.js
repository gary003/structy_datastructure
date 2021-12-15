/*
how high
Write a function, howHigh, that takes in the root of a binary tree. 
The function should return a number representing the height of the tree.
The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
If the tree is empty, return -1.
*/

const howHigh = (node) => {
  if (node === null) return -1

  let maxPathLength = 0

  const stack = [[node, 0]]

  while (stack.length > 0) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    if (currentNode[0].left) {
      stack.push([currentNode[0].left, currentNode[1] + 1])
    }

    if (currentNode[0].right) {
      stack.push([currentNode[0].right, currentNode[1] + 1])
    }

    if (!currentNode[0].left && !currentNode[0].right) maxPathLength = maxPathLength > currentNode[1] ? maxPathLength : currentNode[1]
  }

  return maxPathLength
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(12)
const b = new Node(6)
const c = new Node(6)
const d = new Node(4)
const e = new Node(6)
const f = new Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(howHigh(a)) // -> 2
