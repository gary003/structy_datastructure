/*
counting change
Write a function, countingChange, that takes in an amount and an array of coins. 
The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.
*/

const countingChange = (amount, coins) => {
  const table = Array(amount + 1).fill(0)
  table[0] = 1

  for (let coin of coins) {
    for (let i = 0; i <= amount; i += 1) {
      if (i + coin <= amount) table[i + coin] += table[i]
    }
  }

  // console.log(table)

  return table[amount]
}

console.log(countingChange(14, [2, 12, 10])) // -> 3
console.log(countingChange(4, [1, 2, 3])) // -> 4
console.log(countingChange(1000, [1, 5, 10, 25])) // -> 142511
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])) // -> 1525987916
