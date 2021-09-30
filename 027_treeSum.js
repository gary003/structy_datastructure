/*
tree sum

Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  if (!root) return 0
  let sum = 0

  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (!!currentNode.val) sum += currentNode.val

    if (!!currentNode.left) queue.push(currentNode.left)
    if (!!currentNode.right) queue.push(currentNode.right)
  }

  return sum
}
