// -- SOLUTIONS --

// MY FIRST SOLUTION

function digital_root(n) {
  var reduced

  function reduce(n) {
    reduced = String(n).split('').map(digit => parseInt(digit)).reduce((acc, value) => acc += value)
    return reduced
  }
  reduce(n)

  if(String(reduced).split('').length > 1) {
    while(String(reduced).split('').length > 1) {
      return reduce(reduced)
    }
  } else {
    return reduce(n)
  }
}

// REFACTORED SOLUTION

function digital_root(n) {
  var sum = String(n).split('').map(digit => parseInt(digit)).reduce((acc, value) => acc += value)

  if(String(sum).split('').length > 1) {
    while(String(sum).split('').length > 1) {
      return digital_root(sum)
    }
  } else {
    return sum
  }
}

// OTHER USERS' SOLUTION

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
