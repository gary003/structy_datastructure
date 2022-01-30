/*
topological order
Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. 
The function should return an array containing the topological-order of the graph.
The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.
*/

const graphToEdgeL = (graph) => {
  const edgeL = []
  for (let key of Object.keys(graph)) {
    for (let child of graph[key]) {
      edgeL.push([key, child])
    }
  }

  return edgeL
}

const topologicalOrder = (graph, edgeL = graphToEdgeL(graph), topologicalArr = []) => {
  if (edgeL.length === 0) return topologicalArr.filter((x, i, arr) => arr.lastIndexOf(x) === i)

  const allChilds = new Set(edgeL.map((child) => child[1]))
  const allParents = new Set(edgeL.map((child) => child[0]))
  const allNodes = edgeL.flat()
  const roots = new Set(allNodes.filter((node) => !allChilds.has(node)))

  topologicalArr.push(...roots)

  const edgeLWithoutRoots = edgeL.reduce((acc, edge) => {
    if (roots.has(edge[0])) {
      if (!allParents.has(edge[1])) topologicalArr.push(edge[1])
      return acc
    }
    return acc.concat([edge])
  }, [])

  return topologicalOrder(graph, edgeLWithoutRoots, topologicalArr)
}

const graph1 = {
  a: ["f"],
  b: ["d", "g"],
  c: ["a", "f"],
  d: ["e"],
  e: [],
  f: ["b", "e"]
}
console.log(topologicalOrder(graph1)) // -> ['c', 'a', 'f', 'b', 'g', 'd', 'e']

const graph2 = {
  h: ["l", "m"],
  i: ["k"],
  j: ["k", "i"],
  k: ["h", "m"],
  l: ["m"],
  m: []
}
console.log(topologicalOrder(graph2)) // -> ['j', 'i', 'k', 'h', 'l', 'm']

const graph3 = {
  q: [],
  r: ["q"],
  s: ["r"],
  t: ["s"]
}
console.log(topologicalOrder(graph3)) // -> ['t', 's', 'r', 'q']

const graph4 = {
  v: ["z", "w"],
  w: [],
  x: ["w", "v", "z"],
  y: ["x"],
  z: ["w"]
}
console.log(topologicalOrder(graph4)) // -> ['y', 'x', 'v', 'z', 'w']

// // topological order
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
//     if (numParents[node] === 0) {
//       ready.push(node)
//     }
//   }

//   const order = []
//   while (ready.length > 0) {
//     const node = ready.pop()
//     order.push(node)
//     for (let child of graph[node]) {
//       numParents[child] -= 1
//       if (numParents[child] === 0) {
//         ready.push(child)
//       }
//     }
//   }
//   return order
// }

// // e = number of edges
// // n = number of nodes
// // Time: O(e + n)
// // Space: O(n)
