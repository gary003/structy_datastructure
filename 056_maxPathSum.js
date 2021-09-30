/*
max path sum

Write a function, maxPathSum, that takes in a grid as an argument. 
The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner.
You may only travel through the grid by moving down or right.
You can assume that all numbers are non-negative.
*/

const maxPathSum = (grid) => {
  const table = Array(grid.length)
    .fill(0)
    .map((_) => Array(grid[0].length).fill(0))

  table[grid.length - 1][grid[0].length - 1] = grid[grid.length - 1][grid[0].length - 1]

  for (let row = grid.length - 1; row >= 0; row -= 1) {
    for (let col = grid[0].length - 1; col >= 0; col -= 1) {
      if (col - 1 >= 0) {
        const leftTempMax = table[row][col] + grid[row][col - 1]
        table[row][col - 1] = Math.max(leftTempMax, table[row][col - 1])
      }
      if (row - 1 >= 0) {
        const rightTempMax = table[row][col] + grid[row - 1][col]
        table[row - 1][col] = Math.max(rightTempMax, table[row - 1][col])
      }
    }
  }

  // console.log(table)
  return table[0][0]
}

console.log(
  maxPathSum([
    [1, 3, 12],
    [5, 1, 1],
    [3, 6, 1]
  ])
)
