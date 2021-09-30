/*
max root to leaf path sum

Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. 
The function should return the maximum sum of any root to leaf path within the tree.
You may assume that the input tree is non-empty.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*
  Hum... 
  For dynamic programming this king of problem, you need an array as datastructure.
  LinkedLists are not DP friendly...
*/

const maxPathSum = (root) => {
  const maxLeft = root.left ? maxPathSum(root.left) : null
  const maxRight = root.right ? maxPathSum(root.right) : null

  let maxi = [maxLeft, maxRight].filter((v) => !!v)
  maxi = Math.max(...maxi) === -Infinity ? 0 : Math.max(...maxi)

  return root.val + maxi
}
