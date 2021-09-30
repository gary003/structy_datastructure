/*
sum possible
Write a function sumPossible that takes in an amount and an array of positive numbers.
The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. 
You may reuse numbers of the array as many times as necessary.
You may assume that the target amount is non-negative.
*/

const sumPossible = (amount, numbers) => {
  const table = Array(amount + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= amount; i += 1) {
    if (!table[i]) continue
    for (let num of numbers) {
      if (i + num <= amount) table[i + num] = true
    }
  }

  return table[amount]
}
