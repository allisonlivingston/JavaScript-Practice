// -- SOLUTIONS --

// MY FIRST SOLUTION

function alphabetWar(fight) {
  let right = 0
  let left = 0

  fight.split('').map(letter => {
    switch(letter) {
      case 'w': return left += 4
      case 'p': return left += 3
      case 'b': return left += 2
      case 's': return left += 1
      case 'm': return right += 4
      case 'q': return right += 3
      case 'd': return right += 2
      case 'z': return right += 1
    }
  })

  if(right > left) {
    return "Right side wins!"
  } else if(left > right) {
    return "Left side wins!"
  } else {
    return "Let's fight again!"
  }
}

// REFACTORED SOLUTION

function alphabetWar(fight) {
  let right = 0
  let left = 0

  fight.split('').map(letter => {
    switch(letter) {
      case 'w': return left += 4
      case 'p': return left += 3
      case 'b': return left += 2
      case 's': return left += 1
      case 'm': return right += 4
      case 'q': return right += 3
      case 'd': return right += 2
      case 'z': return right += 1
    }
  })

  return right > left ? "Right side wins!" : left > right ? "Left side wins!" : "Let's fight again!"
}
