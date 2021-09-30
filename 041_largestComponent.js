/*
Write a function, largestComponent, 
that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

const gph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"]
}

const explore = (graph, node, visited) => {
  visited.add(node)
  let sizeCurrentComponent = 1

  for (let neighbor of graph[node]) {
    if (visited.has(neighbor)) continue
    sizeCurrentComponent += explore(graph, neighbor, visited)
  }

  return sizeCurrentComponent
}

const largestComponent = (graph, visited = new Set()) => {
  let largestC = 0

  for (let node in graph) {
    if (visited.has(node)) continue
    const sizeComposent = explore(graph, node, visited)
    largestC = sizeComposent > largestC ? sizeComposent : largestC
  }

  return largestC
}

console.log(largestComponent(gph))
