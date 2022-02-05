/*
build tree in pre
Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. 
The function should build a binary tree that has the given in-order and pre-order traversal structure. 
The function should return the root of this tree.
You can assume that the values of inorder and preorder are unique.
*/

const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 0 || preOrder.length === 0) return null

  const pivotValue = preOrder[0]
  const pivotValueCutIndex = inOrder.indexOf(pivotValue)

  // console.log({ pivotValue, pivotValueCutIndex })

  const newNode = new Node(pivotValue)
  newNode.left = buildTreeInPre(inOrder.slice(0, pivotValueCutIndex), preOrder.slice(1, pivotValueCutIndex + 1))
  newNode.right = buildTreeInPre(inOrder.slice(pivotValueCutIndex + 1), preOrder.slice(pivotValueCutIndex + 1))

  return newNode
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

console.log(buildTreeInPre(["z", "y", "x"], ["y", "z", "x"]))
//       y
//    /    \
//   z      x

console.log(buildTreeInPre(["y", "z", "x"], ["y", "x", "z"]))
//       y
//        \
//         x
//        /
//       z

console.log(buildTreeInPre(["d", "b", "g", "e", "h", "a", "c", "f"], ["a", "b", "d", "e", "g", "h", "c", "f"]))
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

console.log(buildTreeInPre(["t", "u", "s", "q", "r", "p"], ["u", "t", "s", "r", "q", "p"]))
//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p

console.log(buildTreeInPre(["m", "l", "q", "o", "r", "n", "s", "p", "t"], ["l", "m", "n", "o", "q", "r", "p", "s", "t"]))
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t
