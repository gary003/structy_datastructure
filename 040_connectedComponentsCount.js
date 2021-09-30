/* connected components count
Write a function, connectedComponentsCount, 
that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.
*/

const gph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
  g: ["h"],
  h: ["g"]
}

const connectedComponentsCount = (graph, visited = new Set()) => {
  let composentCount = 0

  for (let node in graph) {
    if (visited.has(String(node))) continue
    composentCount += 1
    explore(graph, node, visited)
  }

  return composentCount
}

/******************************
 *** recursive way    *********
 *****************************/
const explore = (graph, source, visited) => {
  visited.add(String(source))
  for (let neighbor of graph[source]) {
    if (visited.has(String(neighbor))) continue
    explore(graph, neighbor, visited)
  }
}

/*****************************
 *** iterative way ***********
 *****************************/
// const explore = (graph, source, visited) => {
//   const queue = [source]
//   while (queue.length > 0) {
//     const currentNode = queue.shift()
//     visited.add(String(currentNode))
//     const unvisitedNeighbors = graph[currentNode].filter((neighbor) => !visited.has(neighbor))
//     queue.push(...unvisitedNeighbors)
//   }
// }

console.log(
  connectedComponentsCount(gph),
  connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
  })
)
