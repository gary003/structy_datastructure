/*
island count
Write a function, islandCount, 
that takes in a grid containing Ws and Ls. 
W represents water and L represents land. 
The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid, visited = new Set()) => {
  // console.log(grid)
  let count = 0

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === "L" && !visited.has(`${row}-${col}`)) {
        //first time i see that island, count ++
        count += 1
        // then, recursively mark all the island as visited
        explore(grid, row, col, visited)
      }
    }
  }

  return count
}

const explore = (grid, row, col, visited) => {
  if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || visited.has(`${row}-${col}`) || grid[row][col] === "W") return false

  visited.add(`${row}-${col}`)

  // console.log(visited)

  explore(grid, row - 1, col, visited)
  explore(grid, row + 1, col, visited)
  explore(grid, row, col - 1, visited)
  explore(grid, row, col + 1, visited)
}

console.log(
  islandCount([
    ["L", "W", "W", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["W", "L", "W", "L", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "L"]
  ])
)
