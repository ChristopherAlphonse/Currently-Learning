// What is the Factory design pattern?
// The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.

function Developer(name) {
  this.name = name
  this.job = 'Developer'
}

function Tester(name) {
  this.name = name
  this.job = 'Tester'
}

function EmployeeFactory() {
  this.create = (name, job) => {
    switch (job) {
      case 1:
        return new Developer(name)
        break
      case 2:
        return new Tester(name)
        break
    }
  }
}

function intro() {
  console.log("Hi, I'm " + this.name + " and I'am a " + this.job + '.')
}

var employeeFactory = new EmployeeFactory()
var employees = []

employees.push(employeeFactory.create('jorge', 1))
employees.push(employeeFactory.create('chris', 2))
employees.push(employeeFactory.create('chris', 2))
employees.push(employeeFactory.create('bruce', 1))
employees.push(employeeFactory.create('kyle', 2))
employees.push(employeeFactory.create('damion', 2))

employees.forEach((worker) => {
  intro.call(worker)
})
