// -- SOLUTIONS --

// MY SOLUTION

decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word=> {
    return word.split(' ').map(code => {
      return MORSE_CODE[code]
    }).join('')
  }).join(' ')
}

// REFACTORED SOLUTION

decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word=> word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ')
}
