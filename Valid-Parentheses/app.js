// -- SOLUTIONS --

// MY SOLUTION

function validParentheses(parens){
var sum = 0
  var valid = true
  let parensToArray = parens.split('')

  parensToArray[0] === ')' || parensToArray[parensToArray.length-1] === '(' || parensToArray.length < 0 || parensToArray.length > 100 ? valid = false : valid = true

  parensToArray.map(value => {
    if(value === '(') {
      sum += 1
    } else if(value === ')') {
      sum -= 1
    } else if(value !== '(' || value !== ')') {
      valid = false
    }
  })
  return valid === false || sum !== 0 ? valid = false : valid = true
}
