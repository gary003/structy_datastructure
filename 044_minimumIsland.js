/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid, visited = new Set()) => {
  // console.log(grid)
  let minSizeIsland = Infinity

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === "L" && !visited.has(`${row}-${col}`)) {
        const islandSize = explore(grid, row, col, visited)
        console.log(`${row}-${col}`)
        minSizeIsland = islandSize < minSizeIsland ? islandSize : minSizeIsland
      }
    }
  }

  return minSizeIsland
}

const explore = (grid, row, col, visited) => {
  if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || visited.has(`${row}-${col}`) || grid[row][col] === "W") return 0

  visited.add(`${row}-${col}`)

  let isLandSize = 1

  isLandSize += explore(grid, row - 1, col, visited)
  isLandSize += explore(grid, row + 1, col, visited)
  isLandSize += explore(grid, row, col - 1, visited)
  isLandSize += explore(grid, row, col + 1, visited)

  return isLandSize
}

console.log(
  minimumIsland([
    ["L", "W", "W", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["W", "L", "W", "L", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "L"]
  ])
)
