// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName () {
  return customerName = customerName.toUpperCase()
}

// write function setBestCustomer() that WHEN CALLED, the function declares a variable called "bestCustomer" which is in global scope, then assigns that variable to 'not bob'.....
function setBestCustomer () {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer () {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'lucas'
function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'lucas'
}
