/*
compress
Write a function, compress, that takes in a string as an argument. 
The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.
Single character occurrences should not be changed.
*/

// const compress = (s) => {
//   let memo = s.charAt(0)

//   let result = ''
//   let letterCount = 0
//   let index = 0
//   for(let letter of s.split('')) {
//     if(memo === letter) {
//       letterCount += 1
//     }
//     else {
//       result += letterCount !== 1 ? `${letterCount}${memo}` : `${memo}`
//       memo = s.charAt(index)
//       letterCount = 1
//     }
//     index += 1
//   }

//   return letterCount !== 1 ? `${result}${letterCount}${memo}` : `${result}${memo}`
// }

const compress = (s, memo = s.charAt(0), letterCount = 0, result = "") => {
  if (s === "") return letterCount !== 1 ? `${result}${letterCount}${memo}` : `${result}${memo}`

  const letter = s.charAt(0)
  const strRest = s.slice(1)

  if (memo === letter) {
    letterCount += 1
  } else {
    result += letterCount !== 1 ? `${letterCount}${memo}` : `${memo}`
    memo = s.charAt(0)
    letterCount = 1
  }

  return compress(strRest, memo, letterCount, result)
}

console.log(compress("ccaaatsss")) // -> '2c3at3s'
console.log(compress("ssssbbz")) // -> '4s2bz'
console.log(compress("ppoppppp")) // -> '2po5p'
console.log(compress("nnneeeeeeeeeeeezz")) // -> '3n12e2z'
console.log(compress("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"))
// -> '127y'
