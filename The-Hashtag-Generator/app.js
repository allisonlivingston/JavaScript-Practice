// -- SOLUTIONS --

// MY SOLUTION

function generateHashtag (str) {
  var singleString = str.replace(/\w+/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1)
    }).replace(/\s/g, '')
    
  return singleString.length >= 140 || singleString.length === 0 ? false : `#${singleString}`
}
