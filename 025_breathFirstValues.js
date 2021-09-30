// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*
breadth first values

Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
*/

const breadthFirstValues = (root) => {
  if (!root) return []

  const arr = []
  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()
    const left = currentNode ? currentNode.left : null
    const right = currentNode ? currentNode.right : null

    const nextValues = [left, right].filter((val) => !!val)

    arr.push(currentNode.val)
    queue.push(...nextValues)
  }

  return arr
}
