/*
uncompress
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
  const toPrint = s.match(/(\d+)([a-z]{1})/g)

  return toPrint.reduce((acc, val) => {
    const num = Number(val.match(/[0-9]+/)[0])
    const char = val.match(/[a-zA-z]{1}/)[0]

    return `${acc}${char.repeat(num)}`
  }, "")
}

console.log(uncompress("2c3a1t")) // ccaaat
