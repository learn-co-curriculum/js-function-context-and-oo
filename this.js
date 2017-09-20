
// function context
// 'invocation context'

// 1 - as a function, a basless function
function thisLogger(){
  console.log(this)
}


// 2 - as a method

// a method is function thats a property of an object

let obj = {
  logger: thisLogger,
  firstName: 'Max',
  nameLogger: function() { console.log(this.firstName)}
}

// 3 - via call and apply (methods of the Function object)


// 4 - as a constructor (bring us into OO Js)

















const listEmployees = function() {
  console.log(this)
  thisLogger()
  this.employees.forEach(function(employee) {
    // Restaurant: T.G.I. Friday's, Employee: Alex
    console.log(`Restaurant: ${this.name}, Employee: ${employee.name}`)
  })
}

const tgif = {
  name: "T.G.I. Friday's",
  employees: [{name: 'Alex'}, {name: 'Rachel'}, {name: 'Max'}],
  listEmployees
}

const chipotle = {
  name: "Chipotle",
  employees: [{name: 'Tim'}, {name: 'Esmery'}, {name: 'Jason'}],
  listEmployees
}
