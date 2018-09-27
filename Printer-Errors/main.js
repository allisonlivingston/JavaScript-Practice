// -- SOLUTIONS --

//MY FIRST SOLUTION

function printerError(s) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']

  var sToArray = s.split('')
  var errorLetters = 0

  for(let i=0; i<sToArray.length; i++) {
    if(alphabet.includes(sToArray[i])) {
      errorLetters += 0
    } else {
      errorLetters += 1
    }
  }
  return (errorLetters + "/" + sToArray.length)
}

//REFACTORED SOLUTION 1

function printerError(s) {
    let b = Array.from(s).filter(letter => letter > "m");
    return b.length+"/"+s.length;
}

//REFACTORED SOLUTION 2

function printerError(s) {
  var regex = /[a-m]/g
  var filtered = Array.from(s).filter(letter => {
    return !letter.match(regex)
  })
  return `${filtered.length}/${s.length}`
}
