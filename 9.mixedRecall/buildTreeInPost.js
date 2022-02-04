/*
build tree in post.
Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. 
The function should build a binary tree that has the given in-order and post-order traversal structure. 
The function should return the root of this tree.
You can assume that the values of inorder and postorder are unique.
*/

const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0 || postOrder.length === 0) return null

  const currentRoot = postOrder[postOrder.length - 1]
  const indexOfRoot = inOrder.indexOf(currentRoot)

  const newNode = new Node(currentRoot)
  newNode.left = buildTreeInPost(inOrder.slice(0, indexOfRoot), postOrder.slice(0, indexOfRoot))
  newNode.right = buildTreeInPost(inOrder.slice(indexOfRoot + 1), postOrder.slice(indexOfRoot, -1))

  return newNode
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

console.log(buildTreeInPost(["y", "x", "z"], ["y", "z", "x"]))
//       x
//    /    \
//   y      z

console.log(buildTreeInPost(["d", "b", "e", "a", "f", "c", "g"], ["d", "e", "b", "f", "g", "c", "a"]))
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

console.log(buildTreeInPost(["d", "b", "g", "e", "h", "a", "c", "f"], ["d", "g", "h", "e", "b", "f", "c", "a"]))
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

console.log(buildTreeInPost(["m", "n"], ["m", "n"]))
//       n
//     /
//    m

console.log(buildTreeInPost(["n", "m"], ["m", "n"]))
//     n
//      \
//       m
