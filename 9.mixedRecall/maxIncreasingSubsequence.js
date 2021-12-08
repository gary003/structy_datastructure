const maxIncreasingSubsequence = (sequence) => {
  if (sequence.length === 0) return 0

  const table = Array(sequence.length).fill(0)
  table[0] = 1

  for (let i = 1; i < sequence.length; i += 1) {
    let max = 0
    for (let j = 0; j < i; j += 1) {
      if (sequence[j] < sequence[i] && table[j] > max) {
        max = table[j]
      }
    }
    table[i] = max + 1
    // console.log(table)
  }

  return Math.max(...table)
}

const arrTest1 = []
const arrTest2 = [9, 6, 4]
const arrTest3 = [12, 9, 2, 5, 4, 32, 90, 20]
const arrTest4 = [1, 4, 2, 3, 9, 5, 6, 7]
const arrTest5 = [15, 1, 6, 12, 5, 2, 1, 6, 3, 4, 9, 10, 12, 6, 12]

console.log(maxIncreasingSubsequence(arrTest1))
console.log(maxIncreasingSubsequence(arrTest2))
console.log(maxIncreasingSubsequence(arrTest3))
console.log(maxIncreasingSubsequence(arrTest4))
console.log(maxIncreasingSubsequence(arrTest5))
