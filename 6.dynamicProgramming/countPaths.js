/*
count paths

Write a function, countPaths, that takes in a grid as an argument. 
In the grid, 'X' represents walls and 'O' represents open spaces. 
You may only move down or to the right and cannot pass through walls. 
The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.
*/

/*****************************
 ***** iterative way *********
 *****************************/
const countPaths = (grid) => {
  const table = Array(grid.length)
    .fill(0)
    .map((_) => Array(grid[0].length).fill(0))

  table[0][0] = 1

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === "O") {
        if (row + 1 < grid.length && grid[row + 1][col] === "O") table[row + 1][col] += table[row][col]
        if (col + 1 < grid[row].length && grid[row][col + 1] === "O") table[row][col + 1] += table[row][col]
      }
    }
  }

  return table[table.length - 1][table[0].length - 1]
}

/******************************
 ***   recursive way  *********
 *****************************/
// const countPaths = (grid, r = 0, c = 0, memo = {}) => {
//   const pos = r + "," + c
//   if (pos in memo) return memo[pos]

//   if (r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0

//   if (r === grid.length - 1 && c === grid[0].length - 1) return 1

//   memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo)

//   return memo[pos]
// }

console.log(
  countPaths([
    ["O", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "O"]
  ])
)

console.log(
  countPaths([
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"]
  ])
)
