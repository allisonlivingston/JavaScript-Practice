// -- SOLUTIONS --

// MY FIRST SOLUTION

var fatFingers = function(str) {
  if(!str) return str
  var capsLock = false
  var reducedStr = str.split('').reduce((result, letter) => {
    if(letter.toUpperCase() === 'A') {
      capsLock = !capsLock
      return result
    } else if(capsLock === true) {
      letter = letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
    }
    result += letter
    return result
  }, '')
  return reducedStr
}

// REFACTORED SOLUTION

var fatFingers = function(str) {
  if (!str) return str
  return str.split(/a/i).map((part, i) => {
    if (i % 2 === 0) {
      return part
    } else {
      return part.replace(/[b-z]/gi, letter => {
        return /[b-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase()
      })
    }
  }).join('')
}
