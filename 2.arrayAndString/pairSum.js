/*
Write a function, pairSum, that takes in an array and a target sum as arguments. 
The function should return an array containing a pair of indices whose elements sum to the given target.
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.
There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
  const table = [[]]

  for (let i = 0; i < numbers.length; i += 1) {
    const newComb = table.map((c) => [...c, [numbers[i], i]])
    table.push(...newComb)
  }

  return table.reduce((acc, val, idx) => {
    if (val.length !== 2) return acc
    if (val[0][0] + val[1][0] === targetSum) acc = [val[0][1], val[1][1]]
    return acc
  }, [])
}

console.log(pairSum([], 8)) // -> []
console.log(pairSum([3, 2, 5, 4, 1], 0)) // -> []
console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
