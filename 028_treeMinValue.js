/*
tree min value

Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.
You may assume that the input tree is non-empty.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let minVal = Infinity

  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (!!currentNode.val) minVal = minVal < currentNode.val ? minVal : currentNode.val

    if (!!currentNode.left) queue.push(currentNode.left)
    if (!!currentNode.right) queue.push(currentNode.right)
  }

  return minVal
}
