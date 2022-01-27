/*
positioning plants
You've been hired to plant flowers in a garden with n different positions. 
There are m different flower types.

The prices of flowers types vary depending on which position they are planted. 
Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. 
What is the minimum cost we need to plant a flower in each position of the garden?
Write a function, positioningPlants, that takes in a 2D array with dimensions n * m. 

Each row of the array represents the costs of the flower types at that position. 
This means that costs[i][j] represents the cost of planting flower type j at position i. 

For example:
Given these costs,
costs = [
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3]
]

The costs of plants at position 1 are $6, $1, and $9.
The cost of planting flower type 0 at position 1 is $6.
The cost of planting flower type 2 at position 1 is $9.
*/

// // mutating the original array
// const positioningPlants = (costs) => {
//   for (let iCost = 1; iCost < costs.length; iCost += 1) {
//     for (let iPlantCost = 0; iPlantCost < costs[0].length; iPlantCost += 1) {
//       const availableSubPrice = costs[iCost - 1].filter((_, i) => i !== iPlantCost)
//       costs[iCost][iPlantCost] = costs[iCost][iPlantCost] + Math.min(...availableSubPrice)
//     }
//   }

//   return Math.min(...costs[costs.length - 1])
// }

const positioningPlants = (costs) => {
  const table = Array(costs.length + 1)
    .fill()
    .map((_) => Array(costs[0].length))

  table[0].fill(0)

  for (let iPos = 0; iPos < costs.length; iPos += 1) {
    for (let iPlantCost = 0; iPlantCost < costs[0].length; iPlantCost += 1) {
      const availableSubPrice = table[iPos].filter((_, i) => i !== iPlantCost)
      table[iPos + 1][iPlantCost] = costs[iPos][iPlantCost] + Math.min(...availableSubPrice)
    }
  }

  // console.log({ table })

  return Math.min(...table[table.length - 1])
}

const plantation1 = [
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3]
]
console.log(positioningPlants(plantation1)) // -> 7, by doing 4 + 1 + 2.

const plantation2 = [
  [12, 14, 5],
  [6, 3, 2]
]
console.log(positioningPlants(plantation2)) // -> 8

const plantation3 = [
  [12, 14, 5],
  [6, 3, 2],
  [4, 2, 7],
  [4, 8, 4],
  [1, 13, 5],
  [8, 6, 7]
]
console.log(positioningPlants(plantation3)) // -> 23

const plantation4 = [
  [12, 14, 5, 13],
  [6, 3, 20, 3],
  [24, 12, 7, 2],
  [4, 80, 45, 3],
  [104, 13, 5, 14],
  [38, 19, 7, 6],
  [12, 2, 1, 2]
]
console.log(positioningPlants(plantation4)) // -> 26

const plantation5 = [
  [12, 14, 50, 12],
  [6, 3, 20, 3],
  [24, 12, 7, 2],
  [4, 80, 45, 3],
  [104, 13, 5, 14],
  [38, 19, 7, 6],
  [1, 20, 1, 2],
  [13, 12, 5, 13],
  [60, 32, 20, 3],
  [24, 12, 7, 2],
  [4, 80, 44, 1],
  [104, 13, 5, 14],
  [38, 19, 76, 6],
  [12, 23, 12, 20],
  [1, 3, 1, 1],
  [1, 2, 12, 5]
]
console.log(positioningPlants(plantation5)) // -> 74

const plantation6 = [
  [12, 14, 50, 12, 13],
  [6, 3, 20, 3, 16],
  [24, 12, 7, 2, 74],
  [4, 80, 45, 3, 100],
  [104, 13, 5, 14, 3],
  [38, 19, 7, 6, 24],
  [1, 20, 1, 2, 31],
  [13, 12, 5, 13, 9],
  [60, 32, 20, 3, 2],
  [24, 12, 7, 2, 42],
  [4, 80, 44, 1, 23],
  [104, 13, 5, 14, 28],
  [38, 19, 76, 6, 12],
  [12, 23, 12, 20, 13],
  [1, 3, 1, 1, 50],
  [1, 2, 12, 5, 36],
  [6, 2, 3, 12, 20],
  [4, 6, 4, 11, 15]
]
console.log(positioningPlants(plantation6)) // -> 75

// // dynamic programming with memoization
// const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
//   const key = pos + "," + lastPlant
//   if (key in memo) return memo[key]

//   if (pos === costs.length) return 0

//   let min = Infinity
//   for (let plant = 0; plant < costs[pos].length; plant += 1) {
//     if (plant !== lastPlant) {
//       const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo)
//       min = Math.min(min, candidate)
//     }
//   }

//   memo[key] = min
//   return min
// }

// // n = # of garden positions (rows)
// // m = # of plant types (columns)
// // Time: O(nm)
// // Space: O(nm)
