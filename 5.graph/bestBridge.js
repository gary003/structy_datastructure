/*
best bridge
Write a function, bestBridge, that takes in a grid as an argument. 
The grid contains water (W) and land (L). 
There are exactly two islands in the grid. 
An island is a vertically or horizontally connected region of land. 
Return the minimum length bridge needed to connect the two islands. 
A bridge does not need to form a straight line.
*/

const checkLand = (grid, iR, iC, visited) => {
  if (grid[iR][iC] !== "L" || visited.has(`${iR},${iC}`)) return []

  const newIsland = []
  newIsland.push([iR, iC])

  visited.add(`${iR},${iC}`)

  if (iR + 1 < grid.length && grid[iR + 1][iC] === "L") {
    newIsland.push(...checkLand(grid, iR + 1, iC, visited))
  }

  if (iC + 1 < grid[iR].length && grid[iR][iC + 1] === "L") {
    newIsland.push(...checkLand(grid, iR, iC + 1, visited))
  }

  if (iR - 1 >= 0 && grid[iR - 1][iC] === "L") {
    newIsland.push(...checkLand(grid, iR - 1, iC, visited))
  }

  if (iC - 1 >= 0 && grid[iR][iC - 1] === "L") {
    newIsland.push(...checkLand(grid, iR, iC - 1, visited))
  }

  return newIsland
}

const getAllIslands = (grid) => {
  const allIslands = []
  const visited = new Set()

  for (let iRow = 0; iRow < grid.length; iRow += 1) {
    for (let iCol = 0; iCol < grid[iRow].length; iCol += 1) {
      // console.log(grid[iRow][iCol])

      const newIsland = checkLand(grid, iRow, iCol, visited)
      // console.log(newIsland)

      if (newIsland.length > 0) allIslands.push(newIsland)
    }
  }

  return allIslands
}

const bfsGrid = (grid, land, departIsland, destIsland) => {
  // console.log(land, destIsland)
  const visitedCase = new Set()

  let minPathLength = Infinity

  let queue = [[land, 0]]

  while (queue.length > 0) {
    const [currentCase, currentPathLength] = queue.shift()
    // console.log(currentCase)

    const hasReachIsland2 = destIsland.some((land) => {
      return land[0] === currentCase[0] && land[1] === currentCase[1]
    })

    // console.log(hasReachIsland2, currentCase, destIsland)

    if (hasReachIsland2) {
      // console.log({ currentCase, currentPathLength })
      return currentPathLength - 1
    }

    if (visitedCase.has(`${currentCase[0]},${currentCase[1]}`)) continue

    visitedCase.add(`${currentCase[0]},${currentCase[1]}`)

    const up = [currentCase[0] - 1, currentCase[1]]
    const right = [currentCase[0], currentCase[1] + 1]
    const down = [currentCase[0] + 1, currentCase[1]]
    const left = [currentCase[0], currentCase[1] - 1]

    const neighbors = [up, right, down, left]
    const validNeighbors = neighbors.filter((neighbor) => {
      const validCoord = neighbor[0] >= 0 && neighbor[0] < grid.length && neighbor[1] >= 0 && neighbor[1] < grid[0].length

      if (!validCoord) return false

      const isIsland1 = departIsland.some((l) => {
        // console.log(l)
        return l[0] === neighbor[0] && l[1] === neighbor[1]
      })

      if (isIsland1) return false

      return true
    })

    const newNeighbors = validNeighbors.map((n) => [n, currentPathLength + 1])

    // console.log(land, newNeighbors)

    queue = queue.concat(newNeighbors)
  }

  return minPathLength
}

const bestBridge = (grid) => {
  const [island1, island2] = getAllIslands(grid)
  // console.log(island1, island2)

  let minLength = Infinity
  for (let land of island1) {
    const bridgeMinLenth = bfsGrid(grid, land, island1, island2)

    // console.log(bridgeMinLenth)

    minLength = bridgeMinLenth < minLength ? bridgeMinLenth : minLength
  }

  return minLength
}

const grid1 = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"]
]
console.log(bestBridge(grid1)) // -> 1

const grid2 = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"]
]
console.log(bestBridge(grid2)) // -> 2

const grid3 = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "W", "W", "W"]
]
console.log(bestBridge(grid3)) // -> 3

const grid4 = [
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "L", "L", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"]
]
console.log(bestBridge(grid4)) // -> 3

const grid5 = [
  ["L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "L", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L"]
]
console.log(bestBridge(grid5)) // -> 2

const grid6 = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"]
]
console.log(bestBridge(grid6)) // -> 8

/*
const bestBridge = (grid) => {
  let mainIsland
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const possibleIsland = traverseIsland(grid, r, c, new Set())
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland
        break
      }
    }
  }

  const visited = new Set(mainIsland)
  const queue = []
  for (let pos of mainIsland) {
    const [row, col] = pos.split(",").map(Number)
    queue.push([row, col, 0])
  }

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift()

    const pos = row + "," + col
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta
      const neighborRow = row + deltaRow
      const neighborCol = col + deltaCol
      const neighborPos = neighborRow + "," + neighborCol
      if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
        visited.add(neighborPos)
        queue.push([neighborRow, neighborCol, distance + 1])
      }
    }
  }
}

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length
  const colInbounds = 0 <= col && col < grid[0].length
  return rowInbounds && colInbounds
}

const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === "W") return visited

  const pos = row + "," + col
  if (visited.has(pos)) return visited

  visited.add(pos)

  traverseIsland(grid, row - 1, col, visited)
  traverseIsland(grid, row + 1, col, visited)
  traverseIsland(grid, row, col - 1, visited)
  traverseIsland(grid, row, col + 1, visited)

  return visited
}
*/
