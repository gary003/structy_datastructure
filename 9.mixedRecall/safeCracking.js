/*
safe cracking
Oh-no! You forgot the number combination that unlocks your safe. 
Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. 
Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

The keypad on the safe has digits 0-9. 
You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. 
The function should return a string representing the combination.
*/

const safeCracking = (hints, pwd = []) => {
  if (hints.length === 1) return pwd.concat(hints[0]).join("")

  const allNums = hints.flat()
  const allChilds = new Set(hints.map((x) => x[1]).flat())

  const root = allNums.find((num) => !allChilds.has(num))
  // console.log({root, hints})

  pwd.push(root)

  const newHints = hints.filter((hint) => hint[0] !== root)
  // console.log(newHints)

  return safeCracking(newHints, pwd)
}

const hints0 = [
  [7, 1],
  [1, 8],
  [7, 8]
]
console.log(safeCracking(hints0)) // -> '718'

const hints1 = [
  [3, 1],
  [4, 7],
  [5, 9],
  [4, 3],
  [7, 3],
  [3, 5],
  [9, 1]
]
console.log(safeCracking(hints1)) // -> '473591'

const hints2 = [
  [2, 5],
  [8, 6],
  [0, 6],
  [6, 2],
  [0, 8],
  [2, 3],
  [3, 5],
  [6, 5]
]
console.log(safeCracking(hints2)) // -> '086235'

const hints3 = [
  [0, 1],
  [6, 0],
  [1, 8]
]
console.log(safeCracking(hints3)) // -> '6018'

const hints4 = [
  [8, 9],
  [4, 2],
  [8, 2],
  [3, 8],
  [2, 9],
  [4, 9],
  [8, 4]
]
console.log(safeCracking(hints4)) // -> '38429'

// const safeCracking = (hints) => {
//   const graph = buildGraph(hints)
//   return topologicalOrder(graph)
// }

// const buildGraph = (edges) => {
//   const graph = {}

//   for (let edge of edges) {
//     const [a, b] = edge
//     if (!(a in graph)) graph[a] = []
//     if (!(b in graph)) graph[b] = []

//     graph[a].push(b)
//   }

//   return graph
// }

// const topologicalOrder = (graph) => {
//   const numParents = {}
//   for (let node in graph) {
//     numParents[node] = 0
//   }

//   for (let node in graph) {
//     for (let child of graph[node]) {
//       numParents[child] += 1
//     }
//   }

//   const ready = []
//   for (let node in numParents) {
//     if (numParents[node] === 0) ready.push(node)
//   }

//   let order = ""
//   while (ready.length > 0) {
//     const node = ready.pop()
//     order += node
//     for (let child of graph[node]) {
//       numParents[child] -= 1
//       if (numParents[child] === 0) ready.push(child)
//     }
//   }

//   return order
// }
