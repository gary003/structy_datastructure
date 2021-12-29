/*
quickest concat
Write a function, quickestConcat, that takes in a string and an array of words as arguments. 
The function should return the minimum number of words needed to build the string by concatenating words of the array.
You may use words of the array as many times as needed.
*/

const quickestConcat = (s, words) => {
  const table = Array(s.length + 1).fill(null)
  table[0] = ""

  for (let i = 0; i <= s.length; i += 1) {
    if (table[i] === null) continue
    for (let suffix of words) {
      if (s.slice(i).indexOf(suffix) !== 0) continue

      const newComb = table[i].length > 0 ? table[i] + "." + suffix : suffix

      if (table[i + suffix.length] !== null && table[i + suffix.length].split(".").length < newComb.split(".").length) continue

      table[i + suffix.length] = newComb
    }
  }

  // console.log(table[s.length])

  return !!table[s.length] ? table[s.length].split(".").length : -1
}

console.log(quickestConcat("caution", ["ca", "ion", "caut", "ut"])) // -> 2
console.log(quickestConcat("caution", ["ion", "caut", "caution"])) // -> 1
console.log(quickestConcat("respondorreact", ["re", "or", "spond", "act", "respond"])) // -> 4
console.log(quickestConcat("simchacindy", ["sim", "simcha", "acindy"])) // -> -1
console.log(quickestConcat("simchacindy", ["sim", "simcha", "acindy", "ch"])) // -> 3
console.log(quickestConcat("uuuuuu", ["u", "uu", "uuu", "uuuu"])) // -> 2
console.log(quickestConcat("rongbetty", ["wrong", "bet"])) // -> -1
console.log(quickestConcat("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", ["u", "uu", "uuu", "uuuu", "uuuuu"])) // -> 7

/*
const quickestConcat = (s, words) => {
  const result = _quickestConcat(s, words)

  if (result === Infinity) {
    return -1
  } else {
    return result
  }
}

const _quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s]

  if (s === "") return 0

  let min = Infinity

  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length)
      const attempt = 1 + _quickestConcat(suffix, words, memo)
      min = Math.min(min, attempt)
    }
  }

  memo[s] = min
  return min
}
*/
