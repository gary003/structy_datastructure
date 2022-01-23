/*
flip tree
Write a function, flipTree, that takes in the root of a binary tree. 
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. 
This flipping should occur in-place by modifying the original tree. 
The function should return the root of the tree.
*/

const flipTree = (root) => {
  if (!root) return null

  const memoL = root.left
  root.left = root.right
  root.right = memoL

  flipTree(root.left)
  flipTree(root.right)

  return root
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
const g = new Node("g")
const h = new Node("h")
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
e.right = h
//      a
//    /  \
//   b    c
//  / \    \
// d   e    f
//    / \
//    g  h
console.log(flipTree(a))
//       a
//    /    \
//   c      b
//  /     /   \
// f     e    d
//     /  \
//    h    g

const u1 = new Node("u")
const t1 = new Node("t")
const s1 = new Node("s")
const r1 = new Node("r")
const q1 = new Node("q")
const p1 = new Node("p")
u1.left = t1
u1.right = s1
s1.right = r1
r1.left = q1
r1.right = p1
//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p
console.log(flipTree(u1))
//           u
//        /    \
//       s      t
//      /
//     r
//    / \
//   p  q

const l2 = new Node("l")
const m2 = new Node("m")
const n2 = new Node("n")
const o2 = new Node("o")
const p2 = new Node("p")
const q2 = new Node("q")
const r2 = new Node("r")
const s2 = new Node("s")
const t2 = new Node("t")
l2.left = m2
l2.right = n2
n2.left = o2
n2.right = p2
o2.left = q2
o2.right = r2
p2.left = s2
p2.right = t2
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t
console.log(flipTree(l2))
//             l
//         /      \
//        n        m
//      /  \
//    p     o
//  / \    / \
// t   s  r   q

const n3 = new Node("n")
const y3 = new Node("y")
const c3 = new Node("c")
n3.left = y3
n3.right = c3
//       n
//     /   \
//    y     c
console.log(flipTree(n3))
//       n
//     /   \
//    c     y

// // Structy recursive solution
// const flipTree = (root) => {
//   if (root === null) return null
//   const left = flipTree(root.left)
//   const right = flipTree(root.right)
//   root.right = left
//   root.left = right
//   return root
// }
