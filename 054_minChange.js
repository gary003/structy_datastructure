/*
min change

Write a function minChange that takes in an amount and an array of coins. 
The function should return the minimum number of coins required to create the amount.
You may use each coin as many times as necessary.
If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins) => {
  const table = Array(amount + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= amount; i += 1) {
    if (!table[i]) continue
    for (let coin of coins) {
      if (i + coin > amount) continue
      if (!table[i + coin] || table[i].length + 1 < table[i + coin].length) table[i + coin] = [...table[i], coin]
    }
  }

  // console.log(table)
  return !!table[amount] ? table[amount].length : -1
}

console.log(minChange(12, [2, 3, 5, 7])) // 2
console.log(minChange(2017, [4, 2, 10])) // -1
