// -- SOLUTIONS --

// MY FIRST SOLUTION

function titleCase(title, minorWords) {
  var lowerCaseArray = title.toLowerCase().split(' ')
  var splitMinors

  if(minorWords !== undefined) {
    var splitMinors = minorWords.toLowerCase().split(/[ ,]+/)
  }

  var capitalize = lowerCaseArray.map(word => !minorWords || !splitMinors.includes(word) ? word.charAt(0).toUpperCase() + word.substring(1) : word)

  var join = capitalize.join(' ')
  return join.charAt(0).toUpperCase() + join.substring(1)
}

// REFACTORED SOLUTION

var lowerCaseArray = title.toLowerCase().split(' ')
  var splitMinors

  if(minorWords !== undefined) {
    var splitMinors = minorWords.toLowerCase().split(/[ ,]+/)
  }

  var capitalizeAndJoin = lowerCaseArray.map(word => !minorWords || !splitMinors.includes(word) ? word.charAt(0).toUpperCase() + word.substring(1) : word).join(' ')

  return capitalizeAndJoin.charAt(0).toUpperCase() + capitalizeAndJoin.substring(1)
