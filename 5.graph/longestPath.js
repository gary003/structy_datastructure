/*
longest path
Write a function, longestPath, 
that takes in an adjacency list for a directed acyclic graph. 
The function should return the length of the longest path within the graph. 
A path may start and end at any two nodes. 
The length of a path is considered the number of edges in the path, 
not the number of nodes.
*/

const longestPath = (graph) => {
  let maxPath = 0
  for (let nodeS of Object.keys(graph)) {
    for (let nodeE of Object.keys(graph)) {
      const currentPathLength = _longestPath(graph, nodeS, nodeE)
      // console.log({nodeS, nodeE, currentPathLength})
      maxPath = currentPathLength > maxPath ? currentPathLength : maxPath
    }
  }

  return maxPath
}

const _longestPath = (graph, nodeStart, nodeEnd) => {
  let maxLength = 0

  let stack = [nodeStart]

  while (stack.length) {
    const path = stack.pop()

    const pathArr = path.split(".")
    const lastNode = pathArr[pathArr.length - 1]

    if (lastNode === nodeEnd) {
      if (maxLength < pathArr.length) maxLength = pathArr.length
      continue
    }

    const validNeighbors = graph[lastNode].filter((n) => !pathArr.includes(n))

    const newPaths = validNeighbors.map((neighbor) => path + "." + neighbor)

    stack = [...stack, ...newPaths]
  }

  return maxLength - 1
}
