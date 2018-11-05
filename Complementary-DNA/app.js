// -- SOLUTIONS --

// MY FIRST SOLUTION

function DNAStrand(dna){
  return (dna.split('').map(letter => {
    if(letter === 'A') {
      return letter = 'T'
    } else if(letter === 'T') {
      return letter = 'A'
    } else if(letter === 'G') {
      return letter = 'C'
    } else if(letter === 'C') {
      return letter = 'G'
    }
  })).join('')
}

// REFACTORED SOLUTION 1

function DNAStrand(dna){
  return (dna.split('').map(letter => {
    switch(letter) {
      case 'A': return letter = 'T'
      case 'T': return letter = 'A'
      case 'G': return letter = 'C'
      case 'C': return letter = 'G'
    }
  })).join('')
}

// REFACTORED SOLUTION 2

function DNAStrand(dna){
  return (dna.split('').map(letter => letter === 'A' ? 'T' : letter === 'T' ? 'A' : letter === 'G' ? 'C' : 'G')).join('')
}
