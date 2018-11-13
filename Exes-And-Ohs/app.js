// -- SOLUTIONS --

// MY FIRST SOLUTION

function XO(str) {
  str = str.toLowerCase()
  let xOTotals = 0
  for(let i=0; i<str.length; i++) {
    str[i] == 'x' ? xOTotals += 1 : str[i] == 'o' ? xOTotals -= 1 : xOTotals += 0
  }
  return xOTotals == 0 ? true : false
}

// REFACTORED SOLUTION 1

function XO(str) {
  str = str.toLowerCase().split('')
  return str.filter(x => x == 'x').length == str.filter(o => o == 'o').length
}

// REFACTORED SOLUTION 2

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
}
