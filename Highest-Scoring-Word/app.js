// -- SOLUTIONS --

// MY FIRST SOLUTION

function high(x){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var phraseArray = x.split(' ')
  var sumArray = []

  for(let j=0; j<phraseArray.length; j++) {
    let sum = 0
    for(let i=0; i<phraseArray[j].length; i++) {
      sum += (alphabet.indexOf(phraseArray[j][i])+1)
    }
    sumArray.push(sum)
  }
  return phraseArray[sumArray.indexOf(sumArray.reduce((previousLargest, currentLargest) => {
    return currentLargest>previousLargest ? currentLargest : previousLargest
  }))]
}

// REFACTORED SOLUTION

function high(x){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var phraseArray = x.split(' ')

  var totalsArray = phraseArray.map(word => {
    let sum = 0
    for(let i=0; i<word.length; i++) {
      sum += (alphabet.indexOf(word[i])+1)
    }
    return sum
  })

  return phraseArray[totalsArray.indexOf(Math.max(...totalsArray))]
}
