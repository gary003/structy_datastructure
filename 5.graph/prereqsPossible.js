/*
prereqs possible
Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. 
Courses have ids ranging from 0 through n - 1. 
A single prerequisite of [A, B] means that course A must be taken before course B. 
The function should return a boolean indicating whether or not it is possible to complete all courses.
*/

/*
A must have test to add is a test where there is a graph with a single component and a cycle!
I added one (test 4).
*/

/*
Despite being readable and short, this is not the best way...
Because this function doesn't shortcut at any moment.
We have to wait until the end(no more roots to find) and see if the graph is empty ...
Even if the cycle appears at the beginning!
*/

const prereqsPossible = (_, prereqs) => {
  if (prereqs.length === 0) return true

  const allCourseFollowingPrereq = new Set(prereqs.map((c) => c[1]))

  const roots = prereqs.reduce((acc, preR) => {
    if (allCourseFollowingPrereq.has(preR[0])) return acc
    return acc.add(preR[0])
  }, new Set())

  if (roots.size === 0) return false

  const newPrereqs = prereqs.filter((pre) => !roots.has(pre[0]))

  return prereqsPossible(_, newPrereqs)
}

const numCourses1 = 6
const prereqs1 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5]
]
console.log(prereqsPossible(numCourses1, prereqs1)) // -> true

const numCourses2 = 6
const prereqs2 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0]
]
console.log(prereqsPossible(numCourses2, prereqs2)) // -> false

const numCourses3 = 5
const prereqs3 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4]
]
console.log(prereqsPossible(numCourses3, prereqs3)) // -> true

const numCourses4 = 6
const prereqs4 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [4, 0]
]
console.log(prereqsPossible(numCourses4, prereqs4)) // -> false

const numCourses5 = 8
const prereqs5 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3]
]
console.log(prereqsPossible(numCourses5, prereqs5)) // -> true

const numCourses6 = 8
const prereqs6 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3]
]
console.log(prereqsPossible(numCourses6, prereqs6)) // -> false

const numCourses7 = 42
const prereqs7 = [[6, 36]]
console.log(prereqsPossible(numCourses7, prereqs7)) // -> true

// const prereqsPossible = (numCourses, prereqs) => {
//   const visiting = new Set()
//   const visited = new Set()

//   const graph = buildGraph(numCourses, prereqs)
//   for (let node in graph) {
//     if (hasCycle(graph, node, visiting, visited)) {
//       return false
//     }
//   }

//   return true
// }

// const hasCycle = (graph, node, visiting, visited) => {
//   if (visited.has(node)) return false
//   if (visiting.has(node)) return true

//   visiting.add(node)

//   for (let neighbor of graph[node]) {
//     if (hasCycle(graph, neighbor, visiting, visited)) {
//       return true
//     }
//   }

//   visiting.delete(node)
//   visited.add(node)

//   return false
// }

// const buildGraph = (numCourses, prereqs) => {
//   const graph = {}

//   for (let i = 0; i < numCourses; i += 1) {
//     graph[i] = []
//   }

//   for (let prereq of prereqs) {
//     const [a, b] = prereq
//     graph[a].push(String(b))
//   }

//   return graph
// }
