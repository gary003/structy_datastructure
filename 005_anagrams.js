/*
anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
  const str1 = s1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join()
  const str2 = s2
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join()

  return str1 === str2
}
