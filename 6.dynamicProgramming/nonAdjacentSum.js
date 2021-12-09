/*
non adjacent sum
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument.
The function should return the maximum sum of non-adjacent elements in the array. 
There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
*/

const nonAdjacentSum = (nums) => {
  const table = Array(nums.length)
  table[0] = nums[0]
  table[1] = nums[1]

  for (let i = 2; i < nums.length; i += 1) {
    const subProblems = table.slice(0, i - 1)
    const maxSubProblem = Math.max(...subProblems)

    table[i] = maxSubProblem + nums[i]
  }

  return Math.max(...table)
}

console.log(nonAdjacentSum([2, 4, 5, 12, 7])) // -> 16
console.log(nonAdjacentSum([7, 5, 5, 12])) // -> 19
console.log(nonAdjacentSum([7, 5, 5, 12, 17, 29])) // -> 48
console.log(nonAdjacentSum([72, 62, 10, 6, 20, 19, 42, 46, 24, 78, 30, 41, 75, 38, 23, 28, 66, 55, 12, 17, 9, 12, 3, 1, 19, 30, 50, 20])) // -> 488
