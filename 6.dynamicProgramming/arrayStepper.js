/*
array stepper
Write a function, arrayStepper, that takes in an array of numbers as an argument. 
You start at the first position of the array. 
The function should return a boolean indicating whether or not it is possible to reach the last position of the array. 
When situated at some position of the array, you may take a maximum number of steps based on the number at that position.
*/

const arrayStepper = (nums) => {
  const table = Array(nums.length).fill(false)
  table[0] = true

  for (let i = 0; i < table.length; i += 1) {
    if (!table[i]) continue
    for (let iNum = 1; iNum <= nums[i]; iNum += 1) {
      // console.log({iNum, i},table.length)
      if (iNum + i > table.length - 1) continue
      table[iNum + i] = true
    }
  }

  // console.log(table,table.length)

  return table[table.length - 1]
}

console.log(arrayStepper([2, 4, 2, 0, 0, 1])) // -> true
console.log(arrayStepper([2, 3, 2, 0, 0, 1])) // -> false
console.log(arrayStepper([3, 1, 3, 1, 0, 1])) // -> true
console.log(arrayStepper([4, 1, 5, 1, 1, 1, 0, 4])) // -> true
console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4])) // -> false
console.log(arrayStepper([1, 1, 1, 1, 1, 0])) // -> true
console.log(arrayStepper([1, 1, 1, 1, 0, 0])) // -> false
console.log(arrayStepper([31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1, 0, 0, 0])) // -> false

// With recursion

// const arrayStepper = (numbers, i = 0, memo = {}) => {
//   if (i in memo) return memo[i]

//   if (i >= numbers.length - 1) return true

//   const maxStep = numbers[i]
//   for (let step = 1; step <= maxStep; step += 1) {
//     if (arrayStepper(numbers, i + step, memo) === true) {
//       memo[i] = true
//       return true
//     }
//   }

//   memo[i] = false
//   return false
// }
