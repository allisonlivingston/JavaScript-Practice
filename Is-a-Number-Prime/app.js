// -- SOLUTIONS --

// MY FIRST SOLUTION

function isPrime(num) {
  if(num === 0 || num === 1 || num < 0) {
    return false
  } else {
    let compositeNumbers = 0
    for(let i=2; i<num; i++) {
      num % i === 0 ? compositeNumbers += 1 : compositeNumbers += 0
    }
    return compositeNumbers === 0 ? true : false
  }
}

// REFACTORED SOLUTION

function isPrime(num) {
  var prime = true
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      prime = false
    }
  }
  return (num < 2) ? false : prime
}
