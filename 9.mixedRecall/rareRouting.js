/*
rare routing
Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. 
The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. 
A route is a sequence of roads that does not visit a city more than once.

Cities will be numbered 0 to n - 1.
You can assume that all roads are two-way roads. 
This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.
*/

const rareRouting = (n, roads) => {
  const allNodes = new Set(roads.flat())
  const allVisitedCities = []

  for (let iCity1 = 0; iCity1 < allNodes.size; iCity1 += 1) {
    for (let iCity2 = iCity1; iCity2 < allNodes.size; iCity2 += 1) {
      if (iCity1 === iCity2) continue
      // console.log({iCity1, iCity2})
      const visitedCities = _routeHasCycle(roads, iCity1, iCity2)
      if (visitedCities === null) return false
      // console.log(visitedCities)
      allVisitedCities.push(...visitedCities)
      // console.log({ allVisitedCities })
    }
  }

  return new Set(allVisitedCities).size === n ? true : false
}

const _routeHasCycle = (roads, startCity, endCity) => {
  const stack = [[startCity, null]]
  const visited = new Set()

  // console.log(stack)

  while (stack.length > 0) {
    const [currentCity, lastCity] = stack.pop()
    // console.log({ currentCity, lastCity, visited })

    if (visited.has(currentCity)) return null
    visited.add(currentCity)

    if (currentCity === endCity) return visited

    const neighbors = roads.reduce((acc, road) => {
      if (!road.includes(currentCity)) return acc
      const newCity = road.find((r) => r !== currentCity)
      if (lastCity === newCity) return acc
      return acc.concat([[newCity, currentCity]])
    }, [])

    // console.log({ neighbors })

    stack.push(...neighbors)
  }

  return null
}

const cityPlan1 = [
  [0, 1],
  [0, 2],
  [0, 3]
]
console.log(rareRouting(4, cityPlan1)) // -> true

const cityPlan2 = [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 2]
]
console.log(rareRouting(4, cityPlan2)) // -> false

const cityPlan3 = [
  [1, 2],
  [5, 4],
  [3, 0],
  [0, 1],
  [0, 4]
]
console.log(rareRouting(6, cityPlan3)) // -> true

const cityPlan4 = [
  [1, 2],
  [4, 1],
  [5, 4],
  [3, 0],
  [0, 1],
  [0, 4]
]
console.log(rareRouting(6, cityPlan4)) // -> false

const cityPlan5 = [
  [0, 1],
  [3, 2]
]
console.log(rareRouting(4, cityPlan5)) // -> false

// // depth first recursive
// const rareRouting = (n, roads) => {
//   const graph = makeGraph(n, roads)
//   const visited = new Set()
//   const valid = validate(graph, "0", visited, null)
//   return valid && visited.size === n
// }

// const validate = (graph, node, visited, lastNode) => {
//   if (visited.has(node)) return false

//   visited.add(node)

//   for (let neighbor of graph[node]) {
//     if (neighbor !== lastNode) {
//       if (!validate(graph, neighbor, visited, node)) {
//         return false
//       }
//     }
//   }

//   return true
// }

// const makeGraph = (n, roads) => {
//   const graph = {}
//   for (let city = 0; city < n; city += 1) {
//     graph[city] = []
//   }

//   for (let road of roads) {
//     const [a, b] = road
//     graph[a].push(String(b))
//     graph[b].push(String(a))
//   }

//   return graph
// }

// // n = number of nodes
// // Time: O(n^2)
// // Space: O(n)
