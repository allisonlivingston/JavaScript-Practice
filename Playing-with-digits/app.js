// -- SOLUTIONS --

// MY FIRST SOLUTION

function digPow(n, p){
  var toArray = String(n).split('').map(integer => Number(integer))
  var total = 0
  toArray.map(integer => {
    total += Math.pow(integer, p++)
  })
  return (total%n) == 0 ? (total/n) : -1
}

// REFACTORED SOLUTION 1

function digPow(n, p){
  var toArray = String(n).split('').map(integer => Number(integer))
  var total = 0
  toArray.map(integer => {
    total += (integer ** p++)
  })
  return (total%n) == 0 ? (total/n) : -1
}

// REFACTORED SOLUTION 2

function digPow(n, p){
  let total = 0
  String(n).split('').map(integer => Number(integer)).map(integer => {
    total += Math.pow(integer, p++)})
  return (total%n) == 0 ? (total/n) : -1
}
