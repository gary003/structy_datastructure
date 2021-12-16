/*
level averages
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.
*/

const levelAverages = (root) => {
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

  return Object.values(levels).map((val) => {
    return val.reduce((tot, value) => tot + value) / val.length
  })
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
const c = new Node(4)
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
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)) // -> [ 3, 7.5, 1 ]
