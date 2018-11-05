// -- SOLUTIONS --

// MY FIRST SOLUTION

function simpleTransposition(text) {
  var textArray = text.split('')
  var tempArray = []
  var row1 = []
  var row2 = []

  for(let i=0; i<textArray.length; i+=2) {
    let chunk = textArray.slice(i, i+2)
    tempArray.push(chunk)
  }

  tempArray.map(value => {
    row1.push(value[0])
    row2.push(value[1])
  })

  return (row1 + row2).replace(/,/g, '')
}

// REFACTORED SOLUTION

function simpleTransposition(text) {
  var textArray = text.split('')
  var row1 = textArray.filter((value, index) => index%2 == 0).join('')
  var row2 = textArray.filter((value, index) => index%2 != 0).join('')
  return row1 + row2
}
