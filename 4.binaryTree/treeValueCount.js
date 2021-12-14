/*
tree value count
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
The function should return the number of times that the target occurs in the tree.
*/

const treeValueCount = (root, target) => {
  if (root === null) return 0

  let count = 0

  const stack = [root]

  while (stack.length > 0) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    if (currentNode.val === target) count += 1

    if (currentNode.left) {
      stack.push(currentNode.left)
    }

    if (currentNode.right) {
      stack.push(currentNode.right)
    }
  }

  return count
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

console.log(treeValueCount(a, 6)) // -> 3
