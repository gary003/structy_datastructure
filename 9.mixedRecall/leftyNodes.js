/*
lefty nodes
Write a function, leftyNodes, that takes in the root of a binary tree. 
The function should return an array containing the left-most value on every level of the tree. 
The array must be ordered in a top-down fashion where the root is the first element.
*/

const leftyNodes = (root) => {
  if (root === null) return []

  const table = [[root]]

  let hasNextLevel = !!root.left || !!root.right

  while (hasNextLevel) {
    const nextLevelNodes = table[table.length - 1].map((node) => [node.left, node.right].filter((x) => x !== null)).flat()
    hasNextLevel = nextLevelNodes.length > 0
    if (hasNextLevel) table.push(nextLevelNodes)
  }

  return table.map((nodes) => nodes[0].val)
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
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
console.log(leftyNodes(a)) // [ 'a', 'b', 'd', 'g' ]

const u2 = new Node("u")
const t2 = new Node("t")
const s2 = new Node("s")
const r2 = new Node("r")
const q2 = new Node("q")
const p2 = new Node("p")
u2.left = t2
u2.right = s2
s2.right = r2
r2.left = q2
r2.right = p2
//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p
console.log(leftyNodes(u2)) // [ 'u', 't', 'r', 'q' ]

const l3 = new Node("l")
const m3 = new Node("m")
const n3 = new Node("n")
const o3 = new Node("o")
const p3 = new Node("p")
const q3 = new Node("q")
const r3 = new Node("r")
const s3 = new Node("s")
const t3 = new Node("t")
l3.left = m3
l3.right = n3
n3.left = o3
n3.right = p3
o3.left = q3
o3.right = r3
p3.left = s3
p3.right = t3
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t
console.log(leftyNodes(l3)) // [ 'l', 'm', 'o', 'q' ]

const n4 = new Node("n")
const y4 = new Node("y")
const c4 = new Node("c")
n4.left = y4
n4.right = c4
//       n
//     /   \
//    y     c
console.log(leftyNodes(n4)) // [ 'n', 'y' ]

const i5 = new Node("i")
const n5 = new Node("n")
const s5 = new Node("s")
const t5 = new Node("t")
i5.right = n5
n5.left = s5
n5.right = t5
//       i
//        \
//         n
//        / \
//       s   t
console.log(leftyNodes(i5)) // [ 'i', 'n', 's' ]

console.log(leftyNodes(null)) // [ ]

const a7 = new Node("t")
console.log(leftyNodes(a7)) // [ 't' ]

// // depth first
// const leftyNodes = (root) => {
//   const values = []

//   const traverse = (node, level) => {
//     if (node === null) return

//     if (values[level] === undefined) values.push(node.val)

//     traverse(node.left, level + 1)
//     traverse(node.right, level + 1)
//   }

//   traverse(root, 0)
//   return values
// }
// // n = number of nodes
// // Time: O(n)
// // Space: O(n)
