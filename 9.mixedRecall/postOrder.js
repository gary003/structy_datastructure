/*
post order
Write a function, postOrder, that takes in the root of a binary tree. 
The function should return an array containing the post-ordered values of the tree.
Post-order traversal is when nodes are recursively visited in the order: left child, right child, self.
*/

const postOrder = (root) => {
  const values = []
  const stack = [root]

  while (stack.length > 0) {
    const currentNode = stack.pop()

    if (currentNode === null) continue
    // console.log(currentNode, stack)

    values.unshift(currentNode.val)

    if (currentNode.left !== null) stack.push(currentNode.left)
    if (currentNode.right !== null) stack.push(currentNode.right)
  }

  return values
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const x = new Node("x")
const y = new Node("y")
const z = new Node("z")

x.left = y
x.right = z

//       x
//    /    \
//   y      z

console.log(postOrder(x)) // -> ['y', 'z', 'x']

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
const g = new Node("g")

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

console.log(postOrder(a)) // -> [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ]

const l = new Node("l")
const m = new Node("m")
const n = new Node("n")
const o = new Node("o")
const p = new Node("p")
const q = new Node("q")
const r = new Node("r")
const s = new Node("s")
const t = new Node("t")

l.left = m
l.right = n
n.left = o
n.right = p
o.left = q
o.right = r
p.left = s
p.right = t

//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t

console.log(postOrder(l)) // -> [ 'm', 'q', 'r', 'o', 's', 't', 'p', 'n', 'l' ]

console.log(postOrder(null)) // -> []

/*
const postOrder = (root) => {
  const values = []
  postOrderTraversal(root, values)
  return values
}

const postOrderTraversal = (root, values) => {
  if (root === null) return
  postOrderTraversal(root.left, values)
  postOrderTraversal(root.right, values)
  values.push(root.val)
}
*/
