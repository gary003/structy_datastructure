/*
can color
Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph. 
The function should return a boolean indicating whether or not it is possible to color nodes of the graph
  using two colors in such a way that adjacent nodes are always different colors.
*/

const canColor = (graph) => {
  const graphWithColors = {}

  for (let node of Object.keys(graph)) {
    if (node in graphWithColors) continue
    if (_canColor(graph, node, graphWithColors) === false) return false
  }

  return true
}

const _canColor = (graph, depart, graphWithColors) => {
  let queue = [[depart, 1]]
  graphWithColors[depart] = 1

  while (queue.length > 0) {
    const [currentNode, currentColor] = queue.shift()

    if (!currentNode) continue

    for (let neighbor of graph[currentNode]) {
      if (graphWithColors[neighbor] === graphWithColors[currentNode]) return false
      if (neighbor in graphWithColors) continue
      else {
        graphWithColors[neighbor] = (currentColor + 1) % 2
        queue = queue.concat([[neighbor, (currentColor + 1) % 2]])
      }
    }
  }

  return true
}

const graph1 = {
  x: ["y"],
  y: ["x", "z"],
  z: ["y"]
}
console.log(canColor(graph1)) // -> true

const graph2 = {
  q: ["r", "s"],
  r: ["q", "s"],
  s: ["r", "q"]
}
console.log(canColor(graph2)) // -> false

const graph3 = {
  a: ["b", "c", "d"],
  b: ["a"],
  c: ["a"],
  d: ["a"]
}
console.log(canColor(graph3)) // -> true

const graph4 = {
  a: ["b", "c", "d"],
  b: ["a"],
  c: ["a", "d"],
  d: ["a", "c"]
}
console.log(canColor(graph4)) // -> false

const graph5 = {
  h: ["i", "k"],
  i: ["h", "j"],
  j: ["i", "k"],
  k: ["h", "j"]
}
console.log(canColor(graph5)) // -> true

const graph6 = {
  z: []
}
console.log(canColor(graph6)) // -> true

const graph7 = {
  h: ["i", "k"],
  i: ["h", "j"],
  j: ["i", "k"],
  k: ["h", "j"],
  q: ["r", "s"],
  r: ["q", "s"],
  s: ["r", "q"]
}
console.log(canColor(graph7)) // -> false

// const canColor = (graph) => {
//   const coloring = {}

//   for (let node in graph) {
//     if (!(node in coloring)) {
//       if (!valid(graph, node, coloring, false)) {
//         return false
//       }
//     }
//   }

//   return true
// }

// const valid = (graph, node, coloring, currentColor) => {
//   if (node in coloring) return currentColor === coloring[node]

//   coloring[node] = currentColor

//   for (let neighbor of graph[node]) {
//     if (!valid(graph, neighbor, coloring, !currentColor)) {
//       return false
//     }
//   }

//   return true
// }
