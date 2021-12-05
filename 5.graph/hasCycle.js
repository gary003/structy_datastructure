/*
has cycle
Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. 
The function should return a boolean indicating whether or not the graph contains a cycle.
*/

const hasCycle = (edges) => {
  for (let nodeS of Object.keys(edges)) {
    for (let nodeE of Object.keys(edges)) {
      if (_hasCycle(edges, nodeS, nodeE)) return true
    }
  }

  return false
}

const _hasCycle = (edges, nodeStart, nodeEnd) => {
  let stack = [nodeStart]

  while (stack.length) {
    const path = stack.pop()

    // console.log(path)

    const pathArr = path.split(".")
    const lastNode = pathArr[pathArr.length - 1]

    const validNeighbors = edges[lastNode].filter((n) => n !== pathArr[pathArr.length - 1])

    // console.log(pathArr, pathArr.slice(0, pathArr.length - 2), edges[lastNode], validNeighbors)

    const cycleFound = validNeighbors.some((n) => pathArr.slice(0, pathArr.length - 1).includes(n))
    if (cycleFound) return true

    // console.log(validNeighbors)

    if (lastNode === nodeEnd) continue

    const newPaths = validNeighbors.map((neighbor) => path + "." + neighbor)

    // console.log(newPaths)

    stack = [...stack, ...newPaths]
  }

  return false
}

console.log(
  hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: []
  })
) // -> false
