/*
Write a function, pairedParentheses, that takes in a string as an argument. 
The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

const pairedParentheses = (str) => {
  if (str.match(/^[a-zA-Z]*$/)) return true

  const reducedString = str.replace(/\([a-zA-Z]*\)/, "")

  if (reducedString === str) return false

  return pairedParentheses(reducedString)
}

console.log(pairedParentheses("(())(water()()")) // false
console.log(pairedParentheses("(())water()()")) // true
console.log(pairedParentheses("()")) // true
