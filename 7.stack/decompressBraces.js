/*
decompress braces
Write a function, decompressBraces, that takes in a compressed string as an argument.
The function should return the string decompressed.
The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
You may assume that every number n is guaranteed to be an integer between 1 through 9.
You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

/*
  In this case using the regexp solution is wayyyy simplier !!
*/

const decompressBraces = (s) => {
  // console.log(s)

  const simplifiedStr = s.replace(/(\d+){(\w+)}/g, (_, numOfRep, strToRepeat) => {
    // console.error(subS, numOfRep, strToRepeat)
    return strToRepeat.repeat(numOfRep)
  })

  if (simplifiedStr === s) return s

  return decompressBraces(simplifiedStr)
}

console.log(decompressBraces("2{q}3{tu}v")) // -> qqtututuv
console.log(decompressBraces("ch3{ao}")) // -> chaoaoao
console.log(decompressBraces("2{y3{o}}s")) // -> yoooyooos
console.log(decompressBraces("z3{a2{xy}b}")) // -> zaxyxybaxyxybaxyxyb
console.log(decompressBraces("2{3{r4{e}r}io}")) // -> reeeerreeeerreeeerioreeeerreeeerreeeerio
console.log(decompressBraces("go3{spinn2{ing}s}")) // -> gospinningingsspinningingsspinningings
console.log(decompressBraces("2{l2{if}azu}l")) // -> lififazulififazul
console.log(decompressBraces("3{al4{ec}2{icia}}")) // -> alececececiciaiciaalececececiciaiciaalececececiciaicia

/*
const decompressBraces = (s) => {
  const nums = "123456789"
  const stack = []
  for (let char of s) {
    if (nums.includes(char)) {
      stack.push(Number(char))
    } else {
      if (char === "}") {
        let segment = ""
        while (typeof stack[stack.length - 1] !== "number") {
          const popped = stack.pop()
          segment = popped + segment
        }
        const number = stack.pop()
        stack.push(repeat(segment, number))
      } else if (char !== "{") {
        stack.push(char)
      }
    }
  }

  return stack.join("")
}

const repeat = (str, n) => {
  let result = ""
  for (let i = 0; i < n; i += 1) {
    result += str
  }
  return result
}
*/
