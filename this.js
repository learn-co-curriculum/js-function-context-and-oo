
// function context
// 'invocation context'

// 1 - as a function, a basless function
function thisLogger(name){
  console.log(name)
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

// function Dog(name, color) {
//   this.name = name
//   this.color = color
// }
//
// Dog.prototype.bark = function(){
//   console.log(`woof! my name is ${this.name}`)
// }

Dog.all = function(){/* */}

class Dog {

  constructor(name, color) {
    this.name = name
    this.color = color
  }

  bark() {
    console.log(`woof! my name is ${this.name}`)
  }
  

  static thisIsAClassMethod() {
    return 'called on the class'
  }
}






















const listEmployees = function() {

  thisLogger()
  // let that = this;

  // this.employees.forEach(function(employee) {
  //   // Restaurant: T.G.I. Friday's, Employee: Alex
  //   console.log(`Restaurant: ${this.name}, Employee: ${employee.name}`)
  // }.bind(this))

  this.employees.forEach((employee) => {
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
