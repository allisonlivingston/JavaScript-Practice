// --SOLUTIONS --

// MY FIRST SOLUTIONS

function product(values) {
  if(values === [] || values == null || values == 0) {
    return null
  } else {
    let total = 1
    for(let i=0; i<values.length; i++) {
    total *= values[i]
    }
    return total
  }
}
