// -- SOLUTIONS --

// MY FIRST SOLUTION

function cakes(recipe, available) {
  var availableToArray = Object.keys(available).map(function(key) {
  return [key, available[key]]
  })

  var recipeToArray = Object.keys(recipe).map(function(key) {
  return [key, recipe[key]]
  })

  var matchAvailableArray = recipeToArray.map(ingredient => ingredient[0]).map(ingredient => availableToArray.find(function(item) {
    return item[0] == ingredient
  }))

  var matchRecipeArray = availableToArray.map(ingredient => ingredient[0]).map(ingredient => recipeToArray.find(function(item) {
    return item[0] == ingredient
  }))

  var matchAvailableArrayFiltered = matchAvailableArray.filter(item => item !== undefined).sort()

  var matchRecipeArrayFiltered = matchRecipeArray.filter(item => item !== undefined).sort()

  let numberOfCakes = []

  for(let i=0; i<matchAvailableArray.length; i++) {
    if(matchAvailableArray[i] == undefined) {
      return 0
    } else {
      numberOfCakes.push(Math.floor((matchAvailableArrayFiltered[i][1])/(matchRecipeArrayFiltered[i][1])))
    }
  }
  return Math.min(...numberOfCakes)
}

// REFACTORED SOLUTION

function cakes(recipe, available) {
  var availableToArray = Object.keys(available).map(function(key) {
  return [key, available[key]]
  })

  var recipeToArray = Object.keys(recipe).map(function(key) {
  return [key, recipe[key]]
  })

  var matchAvailableArray = recipeToArray.map(ingredient => ingredient[0]).map(ingredient => availableToArray.find(function(item) {
    return item[0] == ingredient
  })).sort()

  var matchRecipeArray = availableToArray.map(ingredient => ingredient[0]).map(ingredient => recipeToArray.find(function(item) {
    return item[0] == ingredient
  })).sort()

  let numberOfCakes = []

  for(let i=0; i<matchAvailableArray.length; i++) {
    if(matchAvailableArray[i] == undefined) {
      return 0
    } else {
      numberOfCakes.push(Math.floor((matchAvailableArray[i][1])/(matchRecipeArray[i][1])))
    }
  }
  return Math.min(...numberOfCakes)
}

// OTHER SOLUTION

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)
}

// OTHER SOLUTION

function cakes(recipe, available) {
  return Math.min(
  ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
)}
