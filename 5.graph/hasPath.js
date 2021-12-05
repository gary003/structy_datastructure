/** has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph 
and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

/******************************
 *** recursive way 1  *********
 *****************************/
const hasPathRecursive = (graph, src, dest) => {
  if (src === dest) return true

  return graph[src].reduce((acc, neighbor) => {
    const val = hasPathRecursive(graph, neighbor, dest)
    return acc || val
  }, false)
}

console.log(hasPathRecursive(graph, "a", "f"))

/******************************
 *** recursive way 2  *********
 *****************************/
const hasPathRecursive2 = (graph, src, dest) => {
  if (src === dest) return true

  for (let neighbor of graph[src]) {
    if (hasPathRecursive2(graph, neighbor, dest)) return true
  }

  return false
}

console.log(hasPathRecursive2(graph, "a", "f"))

/*****************************
 *** iterative way ***********
 *****************************/
const hasPathIterative = (graph, src, dest) => {
  const queue = [src]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (currentNode === dest) return true

    queue.push(...graph[currentNode])
  }

  return false
}

console.log(hasPathIterative(graph, "a", "f"))
