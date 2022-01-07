/*string search
Write a function, stringSearch, that takes in a grid of letters and a string as arguments. 
The function should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. 
The path can begin at any position, but you cannot reuse a position more than once in the path.
You can assume that all letters are lowercase and alphabetic.
*/

const stringCheck = (grid, iR, iC, word, iW, visited = new Set()) => {
  if (visited.has(`${iR},${iC}`)) return false
  if (grid[iR][iC] !== word[iW]) return false

  // console.log(grid[iR][iC])
  visited.add(`${iR},${iC}`)
  if (iW === word.length - 1) return true

  const up = iR - 1 >= 0 ? stringCheck(grid, iR - 1, iC, word, iW + 1, visited) : false
  const right = iC + 1 < grid[0].length ? stringCheck(grid, iR, iC + 1, word, iW + 1, visited) : false
  const down = iR + 1 < grid.length ? stringCheck(grid, iR + 1, iC, word, iW + 1, visited) : false
  const left = iC - 1 >= 0 ? stringCheck(grid, iR, iC - 1, word, iW + 1, visited) : false

  return up || right || down || left
}

const stringSearch = (grid, s) => {
  for (let iRow = 0; iRow < grid.length; iRow += 1) {
    for (let iCol = 0; iCol < grid[0].length; iCol += 1) {
      // console.log(letter, iRow, iCol)
      if (stringCheck(grid, iRow, iCol, s, 0)) return true
    }
  }

  return false
}

const grid1 = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"]
]
console.log(stringSearch(grid1, "proxy")) // -> true

const grid2 = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"]
]
console.log(stringSearch(grid2, "rolling")) // -> false

const grid3 = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"]
]
console.log(stringSearch(grid3, "rolling")) // -> false

const grid4 = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "z", "m"]
]
console.log(stringSearch(grid4, "zoo")) // -> false

const grid5 = [
  ["q", "w", "h", "i", "j"],
  ["q", "e", "r", "o", "p"],
  ["h", "y", "t", "x", "z"],
  ["k", "o", "m", "o", "p"]
]
console.log(stringSearch(grid5, "qwerty")) // -> true

const grid6 = [
  ["f", "d", "i", "e", "l", "u", "j", "t", "q", "v", "o", "p"],
  ["o", "p", "b", "e", "m", "w", "m", "l", "h", "j", "s", "v"],
  ["g", "b", "s", "m", "i", "w", "w", "h", "l", "m", "l", "n"],
  ["a", "l", "s", "k", "p", "c", "t", "u", "v", "b", "c", "m"],
  ["m", "t", "c", "k", "e", "n", "r", "b", "a", "z", "l", "c"],
  ["q", "m", "a", "p", "a", "p", "i", "i", "u", "t", "z", "z"],
  ["d", "u", "z", "o", "e", "r", "a", "t", "t", "c", "q", "k"],
  ["f", "u", "z", "g", "c", "i", "k", "v", "o", "f", "s", "w"],
  ["p", "h", "u", "i", "k", "c", "v", "v", "h", "q", "v", "i"],
  ["l", "q", "w", "f", "y", "g", "w", "f", "a", "u", "x", "q"]
]
console.log(stringSearch(grid6, "paprika")) // -> true

const grid7 = [
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "x", "x"],
  ["s", "s", "s", "s", "s", "s", "s", "s", "s", "x", "h"]
]
console.log(stringSearch(grid7, "sssssssh")) // -> false

/*
const stringSearch = (grid, s) => {
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (dfs(grid, s, r, c)) return true
    }
  }
  return false
}

const dfs = (grid, s, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length
  const colInbounds = 0 <= col && col < grid[0].length
  if (s === "") return true

  if (!rowInbounds || !colInbounds) return false

  const char = grid[row][col]
  if (char !== s[0]) return false

  const suffix = s.slice(1)
  grid[row][col] = "*"

  const result = dfs(grid, suffix, row + 1, col) || dfs(grid, suffix, row - 1, col) || dfs(grid, suffix, row, col + 1) || dfs(grid, suffix, row, col - 1)

  grid[row][col] = char
  return result
}
*/
