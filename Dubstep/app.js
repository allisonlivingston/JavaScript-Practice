// -- SOLUTIONS --

// MY FIRST SOLUTION

function songDecoder(song){
  return (song.split('WUB').filter(letters => {
    return letters !== ''
  })).join(' ')
}

// REFACTORED SOLUTION

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}
