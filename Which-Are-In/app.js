// -- SOLUTIONS --

// MY FIRST SOLUTION

function inArray(array1,array2){
  var r = []
  array2.map(word => array1.map(letters => word.includes(letters) ? r.push(letters) : r))
  return r.sort().filter((duplicate, index) => r.indexOf(duplicate) >= index)
}

// REFACTORED SOLUTION 1

function inArray(array1,array2){
  return array1.filter(letters => array2.find(word => word.match(letters))).sort()
}

// REFACTORED SOLUTION 2

function inArray(array1,array2){
  return array1.filter(function(word) {
    return array2.join(' ').includes(word)
  }).sort()
}
