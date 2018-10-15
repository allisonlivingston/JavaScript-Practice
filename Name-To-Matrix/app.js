// -- SOLUTIONS --

// MY SOLUTION

const matrixfy = str => {
  var size = Math.ceil(Math.sqrt(str.length))
  var arrays = []

  for(let i=0; i<size ; i++) {
    arrays.push(str.split('').splice((0 + (size * i)), size))
  }
  for(let i=0; i<arrays.length; i++) {
    if(arrays[i].length !== size) {
      for(let j=0; j<size-arrays[i].length;) {
        arrays[i].push('.')
      }
    }
  }
  return arrays.length === 0 ? "name must be at least one letter" : arrays
}
