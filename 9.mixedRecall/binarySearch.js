/*
binary search
Write a function, binarySearch, that takes in a sorted array of numbers and a target. 
The function should return the index where the target can be found within the array. 
If the target is not found in the array, then return -1.
You may assume that the input array contains unique numbers sorted in increasing order.
Your function must implement the binary search algorithm.
*/

const binarySearch = (arr, target, minIndex = 0, maxIndex = arr.length) => {
  const middle = Math.floor((maxIndex + minIndex) / 2)

  if (minIndex === middle && arr[middle] !== target) return -1

  console.log(minIndex, maxIndex, middle)

  if (target < arr[middle]) return binarySearch(arr, target, minIndex, middle)
  if (target > arr[middle]) return binarySearch(arr, target, middle, maxIndex)

  return middle
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6)) // -> 6
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27)) // -> -1
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8)) // -> 2
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28)) // -> 8
console.log(binarySearch([7, 9], 7)) // -> 0
console.log(binarySearch([7, 9], 9)) // -> 1
console.log(binarySearch([7, 9], 12)) // -> -1
console.log(binarySearch([7], 7)) // -> 0
console.log(binarySearch([], 7)) // -> -1

// const binarySearch = (arr, target, minIndex = 0) => {
//   const middle = Math.floor(arr.length / 2)

//   if (arr.length === 1) return minIndex

//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)

//   if (left.includes(target)) return binarySearch(left, target, minIndex)
//   if (right.includes(target)) return binarySearch(right, target, minIndex + middle)

//   return -1
// }

// const binarySearch = (numbers, target) => {
//   let lo = 0
//   let hi = numbers.length - 1
//   while (lo <= hi) {
//     const mid = Math.floor((lo + hi) / 2)
//     if (target < numbers[mid]) {
//       hi = mid - 1
//     } else if (target > numbers[mid]) {
//       lo = mid + 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// }
