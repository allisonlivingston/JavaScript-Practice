// -- SOLUTIONS --

// MY SOLUTION

function addBinary(a,b) {
  let sum = a + b
  if(sum == 0) return '0'

  let binary = ''

  while(sum > 0) {
    const remainder = sum % 2
    binary = remainder + binary
    sum = Math.floor(sum/2)
  }
  return binary
}
