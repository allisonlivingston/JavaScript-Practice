// -- SOLUTIONS --

// MY FIRST SOLUTION

function solution(number){
  let A = 0
  let B = 0
  let C = 0

  for(let i=1; i < number; i++) {
    if(i%3 == 0 && i%5 == 0) {
      C++
    } else if(i%3 === 0) {
      A++
    } else if(i%5 === 0) {
      B ++
    }
  }
  return [A, B, C]
}

// REFACTORED SOLUTION

function solution(number){
  number--
  let C = Math.floor(number/15)
  let A = Math.floor(number/3) - C
  let B = Math.floor(number/5) - C

  return [A, B, C]
}
