/*
subsets
Write a function, subsets, that takes in an array as an argument.
The function should return a 2D array where each subarray represents one of the possible subsets of the array.
The elements within the subsets and the subsets themselves may be returned in any order.
You may assume that the input array contains unique elements.
*/

const subsets = (elements, result = [[]]) => {
  if (elements.length === 0) return result

  const [element, ...rest] = elements

  const newCombs = result.map((val) => [...val, element])
  const oldCombs = [...result]

  result = [...oldCombs, ...newCombs]

  return subsets(rest, result)
}

console.log(subsets([])) // -> [[]]
console.log(subsets(["x"])) // -> [[], ['x']]
console.log(subsets(["a", "b"])) // -> [[], ['a'], ['b'], ['a', 'b']]
console.log(subsets(["a", "b", "c"]))
