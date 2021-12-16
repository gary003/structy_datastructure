/*
bottom right value
Write a function, bottomRightValue, that takes in the root of a binary tree. 
The function should return the right-most value in the bottom-most level of the tree.
You may assume that the input tree is non-empty.
*/

/*
 * it's better to do it with a queue ( more efficient )
 * The bfs algorithm render automatically the bottom right node (without indexes)
 */

const bottomRightValue = (root) => {
  if (root === null) return null

  // node, depth, position
  const stack = [[root, 0, 1]]

  const res = []

  while (stack.length > 0) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    if (currentNode[0].left) {
      stack.push([currentNode[0].left, currentNode[1] + 1, currentNode[2] * 2 - 1])
    }

    if (currentNode[0].right) {
      stack.push([currentNode[0].right, currentNode[1] + 1, currentNode[2] * 2])
    }

    res.push(currentNode)
  }

  const maxDepth = res.reduce((acc, val) => {
    return val[1] > acc ? val[1] : acc
  }, 0)

  const allDeepestLeaves = res.filter((l) => l[1] === maxDepth)
  // console.log(maxDepth, allDeepestLeaves)

  const bottomRightNode = allDeepestLeaves.reduce((acc, val) => {
    return acc[2] > val[2] ? acc : val
  })

  return bottomRightNode[0].val
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(10)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

console.log(bottomRightValue(a)) // -> 1
