// -- SOLUTIONS --

// MY FIRST SOLUTION

function correct(string) {
  let array = string.split('')
  for(let i=0; i<array.length; i++) {
    array[i] == '5' ? array[i] = 'S' : array[i] == '0' ? array[i] = 'O' : array[i] == '1' ? array[i] = 'I' : array[i]
  }
  return array.join('')
}

// REFACTORED SOLUTION 1

function correct(string) {
  return string.split('').map(letter => letter == '5' ? letter = 'S' : letter == '0' ? letter = 'O' : letter == '1' ? letter = 'I' : letter).join('')
}

// REFACTORED SOLUTION 2

function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/, 'I')
}
