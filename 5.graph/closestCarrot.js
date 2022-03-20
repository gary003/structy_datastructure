/*
closest carrot
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. 
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. 
The function should return a number representing the length of the shortest path from the starting position to a carrot. 
You may move up, down, left, or right, but cannot pass through walls (X). 
If there is no possible path to a carrot, then return -1.
*/

const closestCarrot = (grid, startRow, startCol, visited = new Set()) => {
  const queue = [[startRow, startCol, 0]]

  while (queue.length > 0) {
    const [currentRow, currentCol, currentPathL] = queue.shift()

    visited.add(`${currentRow}-${currentCol}`)

    if (grid[currentRow][currentCol] === "C") return currentPathL

    const validNeighbors = getValidNeighbors(grid, currentRow, currentCol, visited)

    const nextMoves = validNeighbors.map((box) => [...box, currentPathL + 1])

    queue.push(...nextMoves)
  }

  return -1
}

const getValidNeighbors = (grid, row, col, visited) => {
  const validNeighbors = []

  if (row + 1 < grid.length) validNeighbors.push([row + 1, col])
  if (row - 1 >= 0) validNeighbors.push([row - 1, col])
  if (col + 1 < grid[0].length) validNeighbors.push([row, col + 1])
  if (col - 1 >= 0) validNeighbors.push([row, col - 1])

  return validNeighbors.filter((box) => {
    return grid[box[0]][box[1]] !== "X" && !visited.has(`${box[0]}-${box[1]}`)
  })
}

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"]
]

console.log(closestCarrot(grid, 1, 2)) // -> 4

// const closestCarrot = (grid, startRow, startCol) => {
//   const queue = [[startRow, startCol, 0]]
//   const visited = new Set([startRow + "," + startCol])

//   while (queue.length > 0) {
//     const [row, col, distance] = queue.shift()

//     if (grid[row][col] === "C") return distance

//     const deltas = [
//       [1, 0],
//       [-1, 0],
//       [0, 1],
//       [0, -1]
//     ]
//     for (let delta of deltas) {
//       const [deltaRow, deltaCol] = delta
//       const neighborRow = row + deltaRow
//       const neighborCol = col + deltaCol
//       const neighborPos = neighborRow + "," + neighborCol
//       const rowInbounds = 0 <= neighborRow && neighborRow < grid.length
//       const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length
//       if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== "X") {
//         visited.add(neighborPos)
//         queue.push([neighborRow, neighborCol, distance + 1])
//       }
//     }
//   }

//   return -1
// }

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)
