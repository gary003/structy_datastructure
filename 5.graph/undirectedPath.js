/*
undirected path
Write a function, undirectedPath, 
that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const edgeList = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

const makeAdjacencyListFromEdgeList = (eList) => {
  const adjacencyList = {}

  for (let edge of eList) {
    const [node1, node2] = edge

    if (!(node1 in adjacencyList)) adjacencyList[node1] = []
    if (!(node2 in adjacencyList)) adjacencyList[node2] = []

    adjacencyList[node1].push(node2)
    adjacencyList[node2].push(node1)
  }

  return adjacencyList
}

/*****************************
 *** iterative way ***********
 *****************************/

const undirectedPath = (e_list, src, dest, visited = new Set()) => {
  const graph = makeAdjacencyListFromEdgeList(e_list)

  const queue = [src]

  while (queue.length > 0) {
    const newSrc = queue.shift()
    // console.log(newSrc, graph[newSrc])

    if (newSrc === dest) return true
    visited.add(newSrc)

    const unvisitedNeighbors = graph[newSrc].filter((neighbor) => !visited.has(neighbor))

    queue.push(...unvisitedNeighbors)
  }

  return false
}

console.log(undirectedPath(edgeList, "i", "l"))

/******************************
 *** recursive way    *********
 *****************************/
const hasPath = (graph, src, dest, visited = new Set()) => {
  if (src === dest) return true

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor)
      if (hasPath(graph, neighbor, dest, visited)) return true
    }
  }

  return false
}

const undirectedPathRecursive = (e_list, src, dest) => {
  const graph = makeAdjacencyListFromEdgeList(e_list)

  return hasPath(graph, src, dest)
}

console.log(undirectedPathRecursive(edgeList, "i", "o"))
