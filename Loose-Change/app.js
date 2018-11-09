// -- SOLUTIONS --

// MY FIRST SOLUTION

function looseChange(cents){
  let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}

  if(cents < 0 || cents === 0) {
    change
  } else {
    cents = Math.floor(cents)
    change.Quarters = Math.floor(cents/25)
    cents = cents - (change.Quarters * 25)
    change.Dimes = Math.floor(cents/10)
    cents = cents - (change.Dimes * 10)
    change.Nickels = Math.floor(cents/5)
    cents = cents - (change.Nickels * 5)
    change.Pennies = cents
  }
  return change
}

// REFACTORED SOLUTION

function looseChange(cents){
  let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  if(cents <= 0) return change
  cents = Math.floor(cents)
  change.Quarters = Math.floor(cents/25)
  change.Dimes = Math.floor(cents%25/10)
  change.Nickels = Math.floor(cents%25%10/5)
  change.Pennies = cents%25%10%5
  return change
}
