/*
is binary search tree
Write a function, isBinarySearchTree, that takes in the root of a binary tree. 
The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.
A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.
*/

const _isBinarySearchTree = (root) => {
  if (!root) return null
  return [_isBinarySearchTree(root.left), root.val, _isBinarySearchTree(root.right)].flat().filter((x) => !!x)
}

const isBinarySearchTree = (root) => {
  const tree = _isBinarySearchTree(root)

  for (let i = 0; i < tree.length - 1; i += 1) {
    if (tree[i] > tree[i + 1]) return false
  }

  return true
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a1 = new Node(12)
const b1 = new Node(5)
const c1 = new Node(18)
const d1 = new Node(3)
const e1 = new Node(9)
const f1 = new Node(19)

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

console.log(isBinarySearchTree(a1)) // -> true

const a2 = new Node(12)
const b2 = new Node(5)
const c2 = new Node(18)
const d2 = new Node(3)
const e2 = new Node(15)
const f2 = new Node(19)

a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.right = f2

//      12
//    /   \
//   5     18
//  / \     \
// 3   15     19

console.log(isBinarySearchTree(a2)) // -> false

const a3 = new Node(12)
const b3 = new Node(5)
const c3 = new Node(19)
const d3 = new Node(3)
const e3 = new Node(9)
const f3 = new Node(19)

a3.left = b3
a3.right = c3
b3.left = d3
b3.right = e3
c3.right = f3

//      12
//    /   \
//   5     19
//  / \     \
// 3   9     19

console.log(isBinarySearchTree(a3)) // -> true

const a4 = new Node(12)
const b4 = new Node(5)
const c4 = new Node(10)
const d4 = new Node(3)
const e4 = new Node(9)
const f4 = new Node(19)

a4.left = b4
a4.right = c4
b4.left = d4
b4.right = e4
c4.right = f4

//      12
//    /   \
//   5     10
//  / \     \
// 3   9     19

console.log(isBinarySearchTree(a4)) // -> false

const q = new Node(54)
const r = new Node(42)
const s = new Node(70)
const t = new Node(31)
const u = new Node(50)
const v = new Node(72)
const w = new Node(47)
const x = new Node(90)

q.left = r
q.right = s
r.left = t
r.right = u
s.right = v
u.left = w
v.right = x

//       54
//     /    \
//    42     70
//   / \      \
// 31   50     72
//     /        \
//    47         90

console.log(isBinarySearchTree(q)) // -> true

/*
const isBinarySearchTree = (root, target) => {
  const values = []
  inOrderTraversal(root, values)
  return isSorted(values)
}

const inOrderTraversal = (root, values) => {
  if (root === null) return
  inOrderTraversal(root.left, values)
  values.push(root.val)
  inOrderTraversal(root.right, values)
}

const isSorted = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    const current = numbers[i]
    const next = numbers[i + 1]
    if (next < current) return false
  }

  return true
}
*/
