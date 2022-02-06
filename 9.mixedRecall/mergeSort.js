/*
merge sort
Write a function, mergeSort, that takes in an array of numbers as an argument. 
The function should return a new array containing elements of the original array sorted in ascending order. 
Your function must implement the merge sort algorithm.
*/

const mergeArrays = (arr1, arr2) => {
  const mergedArr = []
  let [idx1, idx2] = [0, 0]

  while (idx1 < arr1.length && idx2 < arr2.length) {
    const left = arr1[idx1]
    const right = arr2[idx2]

    if (left < right) {
      mergedArr.push(left)
      idx1 += 1
    } else {
      mergedArr.push(right)
      idx2 += 1
    }
  }

  if (idx1 < arr1.length) return mergedArr.concat(arr1.slice(idx1))
  if (idx2 < arr2.length) return mergedArr.concat(arr2.slice(idx2))
  return mergedArr
}

const mergeSort = (nums, memo = {}) => {
  // console.log(memo)
  if (nums.length === 1) return nums
  if (nums.join("|") in memo) return memo[nums.join("|")]

  const pivotIndex = Math.floor(nums.length / 2)

  const left = mergeSort(nums.slice(0, pivotIndex), memo)
  const right = mergeSort(nums.slice(pivotIndex), memo)

  // console.log(pivotIndex, left, right)

  memo[nums.join("|")] = mergeArrays(left, right)
  return memo[nums.join("|")]
}

console.log(mergeArrays([3, 9, 11], [1, 8, 13, 15, 19]))
console.log(mergeArrays([], [1, 8, 19]))
console.log(mergeArrays([3, 9, 11], []))

const numbersA = new Array(12).fill(7)
console.log(mergeSort(numbersA))
// -> [7, 7, 7, 7, 7, ...]

const numbers0 = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
console.log(mergeSort(numbers0))
// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]

const numbers1 = [7, -30, -4, -1, 12, 0, 20]
console.log(mergeSort(numbers1))
// -> [ -30, -4, -1, 0, 7, 12, 20 ]

const numbers2 = [8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(mergeSort(numbers2))
// -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

const numbers3 = [
  72, 42, 16, 81, 84, 17, 2, 81, 22, 79, 86, 38, 77, 80, 81, 70, 81, 80, 35, 21, 89, 38, 57, 28, 4, 17, 50, 38, 68, 82, 22, 76, 45, 40, 67, 94, 37, 27, 81, 53, 36, 18, 28, 60, 45, 74, 40, 29, 18, 6, 28, 57, 42, 60, 64, 12, 78, 97, 96, 1, 20, 20, 61, 67, 82, 10, 63, 71, 39, 52, 37, 69, 37, 24, 66, 74, 15, 92, 49, 31, 56, 67, 50, 57, 79, 0, 21, 56, 82, 22, 4, 20, 91, 72, 58, 93, 99, 14, 42, 91
]
console.log(mergeSort(numbers3))
// -> [ 0,  1,  2,  4,  4,  6, 10, ... , 96, 97, 99 ]

const numbers4 = new Array(95000).fill(7)
console.log(mergeSort(numbers4))
// -> [7, 7, 7, 7, 7, ...]

const numbers5 = new Array(120000).fill(7)
console.log(mergeSort(numbers5))
// -> [7, 7, 7, 7, 7, ...]

// const mergeSort = (nums) => {
//   if (nums.length <= 1) return nums
//   const mid = Math.floor(nums.length / 2)
//   const left = nums.slice(0, mid)
//   const right = nums.slice(mid)
//   const sortedLeft = mergeSort(left)
//   const sortedRight = mergeSort(right)
//   return merge(sortedLeft, sortedRight)
// }

// const merge = (array1, array2) => {
//   array1.reverse()
//   array2.reverse()
//   const merged = []

//   while (array1.length > 0 && array2.length > 0) {
//     if (array1[array1.length - 1] < array2[array2.length - 1]) {
//       merged.push(array1.pop())
//     } else {
//       merged.push(array2.pop())
//     }
//   }

//   merged.push(...array1.reverse())
//   merged.push(...array2.reverse())

//   return merged
// }

// //  n = array size
// //  Time: O(nlogn)
// //  Space: O(n)
