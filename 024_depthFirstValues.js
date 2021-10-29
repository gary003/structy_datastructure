// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*
depth first values

Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
*/

const depthFirstValues = (root) => {
  if (!root) return []

  const arr = []
  let stack = [root]

  while (stack.length > 0) {
    const currentValue = stack.pop()

    arr.push(currentValue.val)

    const nextValues = [currentValue.right, currentValue.left].filter((val) => !!val)

    stack = [...stack, ...nextValues]
  }

  return arr
}
