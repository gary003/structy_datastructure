// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*
tree includes

Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.
*/

const treeIncludes = (root, target) => {
  if (!root) return false

  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (currentNode.val === target) return true

    const nextValues = [currentNode.left, currentNode.right].filter((val) => !!val)

    queue.push(...nextValues)
  }

  return false
}
