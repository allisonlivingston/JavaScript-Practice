// -- SOLUTIONS --

// MY SOLUTION

function rgb(r, g, b){
  return Array(r, g, b).map(value => value > 255 ? Number(value = 255).toString(16) : Number(value).toString(16)).map(value => value < 0 ? value = '0' : value).map(value => value.length < 2 ? value = "0" + value : value).reduce((acc, value) => acc + value).toUpperCase()
}
