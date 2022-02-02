/*
breaking boundaries
Write a function, breakingBoundaries, that takes in 5 arguments: 
  a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). 
Say you were situated in a grid with dimensions m * n. 
If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. 
A single move is moving one space up, down, left, or right. 
During a path you may revisit a position.
*/

const isOut = (pos, gridH, gridW) => {
  return pos[0] >= gridH || pos[0] < 0 || pos[1] >= gridW || pos[1] < 0
}

const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  if (`${k}-${r}-${c}` in memo) return memo[`${k}-${r}-${c}`]

  if (isOut([r, c], m, n)) return 1
  if (k === 0) return 0

  const nextPos = [
    [r + 1, c],
    [r - 1, c],
    [r, c + 1],
    [r, c - 1]
  ]

  let sum = 0
  for (let neighb of nextPos) {
    const [x, y] = neighb
    sum += breakingBoundaries(m, n, k - 1, x, y, memo)
  }

  memo[`${k}-${r}-${c}`] = sum
  return sum
}

console.log(breakingBoundaries(3, 4, 2, 0, 0)) // -> 4
console.log(breakingBoundaries(3, 4, 3, 0, 0)) // -> 11
console.log(breakingBoundaries(2, 2, 2, 1, 1)) // -> 6
console.log(breakingBoundaries(4, 4, 5, 2, 1)) // -> 160
console.log(breakingBoundaries(5, 6, 9, 2, 5)) // -> 11635
console.log(breakingBoundaries(6, 6, 12, 3, 4)) // -> 871065
console.log(breakingBoundaries(6, 6, 15, 3, 4)) // -> 40787896
console.log(breakingBoundaries(6, 8, 16, 2, 1)) // -> 137495089

// const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
//   const key = `${k},${r},${c}`
//   if (key in memo) return memo[key]

//   const rowInbounds = 0 <= r && r < m
//   const colInbounds = 0 <= c && c < n
//   if (!rowInbounds || !colInbounds) return 1

//   if (k === 0) return 0

//   let count = 0
//   const deltas = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0]
//   ]
//   for (let delta of deltas) {
//     const [dRow, dCol] = delta
//     count += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo)
//   }

//   memo[key] = count
//   return count
// }

// // m = # rows
// // n = # columns
// // k = # moves
// // Time: O(mnk)
// // Space: O(mnk)
