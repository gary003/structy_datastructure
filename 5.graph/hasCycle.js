/*
has cycle
Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. 
The function should return a boolean indicating whether or not the graph contains a cycle.
*/

/*
Founding cycle in a graph is easier if you use an edge list instead of an adjency list
Because you would just have to recursively remove the edges values containing the current roots from the edge list.
(see prereqPossible exercise).
*/

const hasCycle = (aList) => {
  for (let node of Object.keys(aList)) {
    if (_hasCycle(aList, node)) return true
  }

  return false
}

const _hasCycle = (aList, nodeStart) => {
  let stack = [nodeStart]

  while (stack.length) {
    const path = stack.pop()

    // console.log(path)

    const pathArr = path.split(".")
    const lastNode = pathArr[pathArr.length - 1]

    const validNeighbors = aList[lastNode].filter((n) => n !== pathArr[pathArr.length - 1])

    // console.log(pathArr, pathArr.slice(0, pathArr.length - 2), aList[lastNode], validNeighbors)

    const cycleFound = validNeighbors.some((n) => pathArr.slice(0, pathArr.length - 1).includes(n))
    if (cycleFound) return true

    // console.log(validNeighbors)

    const newPaths = validNeighbors.map((neighbor) => path + "." + neighbor)

    // console.log(newPaths)

    stack = [...stack, ...newPaths]
  }

  return false
}

const graph1 = {
  a: ["b"],
  b: ["c"],
  c: ["a"]
}
console.log(hasCycle(graph1)) // -> true

const graph2 = {
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: []
}
console.log(hasCycle(graph2)) // -> false

const graph3 = {
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"]
}
console.log(hasCycle(graph3)) // -> true

const graph4 = {
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"]
}
console.log(hasCycle(graph4)) // -> false

const graph5 = {
  a: ["b"],
  b: ["c"],
  c: ["a"],
  g: []
}
console.log(hasCycle(graph5)) // -> true

// // white-grey-black algorithm
// const hasCycle = (graph) => {
//   const visited = new Set()
//   for (let startNode in graph) {
//     if (cycleDetect(graph, startNode, new Set(), visited)) return true
//   }
//   return false
// }

// const cycleDetect = (graph, node, visiting, visited) => {
//   if (visited.has(node)) return false
//   if (visiting.has(node)) return true
//   visiting.add(node)

//   for (let neighbor of graph[node]) {
//     if (cycleDetect(graph, neighbor, visiting, visited)) return true
//   }

//   visiting.delete(node)
//   visited.add(node)
//   return false
// }
