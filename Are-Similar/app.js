// -- SOLUTIONS --

// MY SOLUTION

function areSimilar(A, B) {
  function sort(a, b) {
    return a-b
  }
  let array1 = []
  let array2 = []

  for(let i=0; i<A.length; i++) {
    if(A[i] !== B[i]) {
      array1.push(A[i])
      array2.push(B[i])
    }
  }

  let sorted1 = array1.sort(sort)
  let sorted2 = array2.sort(sort)

  return array1.length > 2 || sorted1[0] !== sorted2[0] || sorted1[1] !== sorted2[1] ? false : true
}
