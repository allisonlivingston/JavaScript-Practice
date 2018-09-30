// -- SOLUTIONS --

// MY FIRST SOLUTION

function descendingOrder(n){
  var toArray = n.toString(n.length).split('').map(num => parseInt(num))
  var sortedArray = toArray.sort().reverse()
  return Number(sortedArray.join(''))
}

// REFACTORED SOLUTION

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
