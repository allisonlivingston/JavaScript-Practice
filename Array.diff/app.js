// -- SOLUTIONS --

// MY FIRST SOLUTION

function array_diff(a, b) {
  for(let i=a.length; i--;) {
    for(let j=0; j<b.length; j++) {
      if(a[i] == b[j]) {
        a.splice(i, 1)
      }
    }
  }
  return a
}

// REFACTORED SOLUTION 1

function array_diff(a, b) {
  return a.filter(value => !b.includes(value))
}

// REFACTORED SOLUTION 2

function array_diff(a, b) {
  return a.filter(value => {
    return b.indexOf(value) === -1
  })
}
