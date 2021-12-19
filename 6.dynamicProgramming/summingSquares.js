/*
summing squares
Write a function, summingSquares, that takes a target number as an argument. 
The function should return the minimum number of perfect squares that sum to the target. 
A perfect square is a number of the form (i*i) where i >= 1.
For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
*/

const summingSquares = (n) => {
  const squares = Array(Math.ceil(n ** 0.5))
    .fill(0)
    .map((_, i) => (i + 1) ** 2)

  const table = Array(n + 1)
  table[0] = []

  for (let i = 0; i < n; i += 1) {
    for (let square of squares) {
      if (square + i > n) continue
      if (!table[square + i] || table[square + i].length > table[i].length + 1) {
        table[square + i] = table[i].concat(square)
      }
    }
  }

  return table[n].length
}

console.log(summingSquares(8)) // -> 2
console.log(summingSquares(9)) // -> 1
console.log(summingSquares(12)) // -> 3
console.log(summingSquares(1)) // -> 1
console.log(summingSquares(31)) // -> 4
console.log(summingSquares(50)) // -> 2
console.log(summingSquares(68)) // -> 2
console.log(summingSquares(87)) // -> 4
