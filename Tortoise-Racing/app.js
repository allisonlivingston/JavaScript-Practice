// -- MY SOLUTIONS --

// MY FIRST SOLUTION

function race(v1, v2, g) {
  v1 = v1 / 3600
  v2 = v2 / 3600
  let timeInSeconds = (g/(v2-v1))
  let hours = (timeInSeconds/3600)
  let minutes = (timeInSeconds%3600/60).toFixed(2)
  let seconds = (timeInSeconds%3600%60%60).toFixed(2)

  if(v1 < 0 || v2 < 0 || timeInSeconds < 0) {
    return null
  } else {
    return [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)]
  }
}

// REFACTORED SOLUTION 1

function race(v1, v2, g) {
  v1 = v1/3600
  v2 = v2/3600
  let timeInSeconds = (g/(v2-v1))
  let hours = (timeInSeconds/3600)
  let minutes = (timeInSeconds%3600/60).toFixed(2)
  let seconds = (timeInSeconds%3600%60%60).toFixed(2)

  return v1 >= v2 ? null : [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)]
}

// REFACTORED SOLUTION 2

function race(v1, v2, g) {
  if(v1 >= v2) return null

  let time = (g/(v2-v1))
  let hours = Math.floor(time)
  let minutes = Math.floor((time * 60) % 60)
  let seconds = Math.floor((time * 3600) % 60)

  return [hours, minutes, seconds]
}

// REFACTORED SOLUTION 3

function race(v1, v2, g) {
  let time=g/(v2-v1)
  return v2 >= v1 ? [Math.floor(time), Math.floor(time*60%60), Math.floor(time*3600%60)] : null
}
