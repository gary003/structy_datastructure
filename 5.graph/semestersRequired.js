/*
semesters required
Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. 
Courses have ids ranging from 0 through n - 1. 
A single prerequisite of [A, B] means that course A must be taken before course B. 
Return the minimum number of semesters required to complete all n courses. 
There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.
Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester.
You must take A in some semester before B.
You can assume that it is possible to eventually complete all courses.
*/

const semestersRequired = (numCourses, prereqs) => {
  const rangeOfCourses = Array(numCourses)
    .fill(0)
    .map((_, i) => i)

  const roots = rangeOfCourses.filter((i) => !prereqs.map((p) => p[1]).includes(i))
  // console.log(roots)

  const stack = roots.map((r) => [r, 1])

  console.log(stack)

  let maxNumOfSemesters = 1

  while (stack.length) {
    const currentNode = stack.pop()
    // console.log(currentNode)

    const linkedSemesters = prereqs.filter((p) => p[0] === currentNode[0])
    // console.log(linkedSemesters)

    if (linkedSemesters.length) maxNumOfSemesters = Math.max(maxNumOfSemesters, currentNode[1] + 1)
    // console.log(maxNumOfSemesters)

    stack.push(...linkedSemesters.map((l) => [l[1], currentNode[1] + 1]))

    console.log(stack)
  }

  return maxNumOfSemesters
}

const numCourses1 = 6
const prereqs1 = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5]
]
console.log(semestersRequired(numCourses1, prereqs1)) // -> 3

const numCourses2 = 7
const prereqs2 = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6]
]
console.log(semestersRequired(numCourses2, prereqs2)) // -> 5

const numCourses34 = 5
const prereqs34 = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2]
]
console.log(semestersRequired(numCourses34, prereqs34)) // -> 2

const numCourses4 = 12
const prereqs4 = []
console.log(semestersRequired(numCourses4, prereqs4)) // -> 1

const numCourses5 = 3
const prereqs5 = [
  [0, 2],
  [0, 1],
  [1, 2]
]
console.log(semestersRequired(numCourses5, prereqs5)) // -> 3

const numCourses6 = 6
const prereqs6 = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5]
]
console.log(semestersRequired(numCourses6, prereqs6)) // -> 2
