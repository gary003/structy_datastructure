/*
permutations
Write a function, permutations, that takes in an array an argument. 
The function should return a 2D array where each subarray represents one of the possible permutations of the array.
The subarrays may be returned in any order.
You may assume that the input array contains unique elements.
*/

const permutations = (items) => {
  //console.log(items)
  const table = Array(items.length + 1)
  table[0] = [[]]

  for (let i = 0; i < items.length; i += 1) {
    const oldCombs = table[i]
    const newCombs = []
    // console.log(oldCombs,items[i])
    for (let oldComb of oldCombs) {
      // console.log(oldCombs,items[i])
      for (let j = 0; j <= oldComb.length; j += 1) {
        newCombs.push([...oldComb.slice(0, j), items[i], ...oldComb.slice(j)])
      }
    }

    table[i + 1] = newCombs
  }

  return table[table.length - 1]
}

const arr1 = "abc".split("")
console.log(permutations(arr1))

const arr2 = ["red", "blue"]
console.log(permutations(arr2))

const arr3 = [8, 2, 1, 4]
console.log(permutations(arr3))
