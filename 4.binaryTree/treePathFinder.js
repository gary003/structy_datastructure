/*
tree path finder
Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
The function should return an array representing a path to the target value. 
If the target value is not found in the tree, then return null.
You may assume that the tree contains unique values.
*/

const pathFinder = (root, target) => {
  if (root === null) return null

  const stack = [[root]]

  while (stack.length > 0) {
    const currentPath = stack.pop()
    // console.log(currentPath)

    if (currentPath[currentPath.length - 1].val === target) return currentPath.map((cp) => cp.val)

    const nextNodes = [currentPath[currentPath.length - 1].left, currentPath[currentPath.length - 1].right].filter((n) => !!n)
    //console.log(nextNodes)

    stack.push(...nextNodes.map((nn) => [...currentPath, nn]))
    // console.log(stack)
  }

  return null
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(pathFinder(a, "e")) // -> [ 'a', 'b', 'e' ]
