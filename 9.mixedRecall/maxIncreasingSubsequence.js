/*
max increasing subseq
Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument.
The function should return the length of the longest subsequence of strictly increasing numbers.
A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.
*/

const maxIncreasingSubseq = (sequence) => {
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

const numbers1 = [4, 18, 20, 10, 12, 15, 19]
console.log(maxIncreasingSubseq(numbers1)) // -> 5

const numbers2 = [12, 9, 2, 5, 4, 32, 90, 20]
console.log(maxIncreasingSubseq(numbers2)) // -> 4

const numbers3 = [42, 50, 51, 60, 55, 70, 4, 5, 70]
console.log(maxIncreasingSubseq(numbers3)) // -> 5

const numbers4 = [7, 14, 10, 12]
console.log(maxIncreasingSubseq(numbers4)) // -> 3

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(maxIncreasingSubseq(numbers5)) // -> 21

const numbers6 = [1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100, 104]
console.log(maxIncreasingSubseq(numbers6)) // -> 23

const numbers7 = [1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100, 101, 102, 103, 104, 105]
console.log(maxIncreasingSubseq(numbers7)) // -> 27

/*
const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
  const key = i + ',' + previous;
  if (key in memo) return memo[key];
  if (i === numbers.length) return 0;

  const options = [];
  const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  options.push(dontTakeCurrent);
  
  const current = numbers[i];
  if (current > previous) {
    const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeCurrent);
  }
  
  memo[key] = Math.max(...options);
  return memo[key];
}
*/
