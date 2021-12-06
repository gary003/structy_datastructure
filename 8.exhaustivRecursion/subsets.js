const subsets = (elements, result = [[]]) => {
  if (elements.length === 0) return result

  const [element, ...rest] = elements

  const newCombs = result.map((val) => [element, ...val])
  const oldCombs = [...result]

  result = [...oldCombs, ...newCombs]

  return subsets(rest, result)
}

console.log(subsets([])) // -> [[]]
console.log(subsets(["x"])) // -> [[], ['x']]
console.log(subsets(["a", "b"])) // -> [[], ['a'], ['b'], ['b', 'a']]
