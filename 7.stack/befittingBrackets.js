/*
befitting brackets
Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }
*/
const befittingBrackets = (str) => {
  if (str === "") return true

  const reducedString = str.replace(/\(\)|\[\]|{}/, "")

  if (reducedString === str) return false

  return befittingBrackets(reducedString)
}

console.log(befittingBrackets("")) // -> true
console.log(befittingBrackets("({[]})")) // -> true
console.log(befittingBrackets("[]{}()[]")) // -> true

console.log(befittingBrackets("{[]}({}")) // -> false
console.log(befittingBrackets("[]{}(}[]")) // -> false
console.log(befittingBrackets("[][}")) // -> false
console.log(befittingBrackets("]{}")) // -> false
console.log(befittingBrackets("{[(}])")) // -> false
