// -- SOLUTIONS --

// MY SOLUTION

function matrixAddition(a, b){
  return a.map((array, outerArrayIndex) => array.map((value, innerArrayIndex) => {
    return value + b[outerArrayIndex][innerArrayIndex]
  }))
}
