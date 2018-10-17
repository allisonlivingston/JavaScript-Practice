// -- SOLUTIONS --

// MY SOLUTION

// ** TIMED OUT --> DID NOT PASS ALL TESTS **

var sum_pairs=function(ints, s){
  var pairArray = []
  for(let i=0; i<ints.length; i++) {
    for(let j=ints.length-1; j>i; j--) {
      console.log(i)
      if((ints[i] + ints[j]) === s) {
        pairArray.push([i, j])
      }
    }
  }
  var secondIndexArray = Math.min(...pairArray.map(pair => pair[1]))

  var sumPairArray

  if(secondIndexArray !== Infinity) {
    var sumPairArray = pairArray.filter(value => value[1] === secondIndexArray)
  } else {
    sumPairArray = undefined
  }

  return sumPairArray !== undefined ? [ints[sumPairArray[0][0]], ints[sumPairArray[0][1]]] : undefined
}
