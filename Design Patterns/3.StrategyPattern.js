// What is the Strategy design pattern?
// The Strategy pattern is a behavioral design pattern that enables you to define a group (or family) of closely-related algorithms (known as strategies). The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.

function Fedex() {
  this.calculate = (package) => {
    console.log(package)
    return 10.22
  }
}
function UPS() {
  this.calculate = (package) => {
    console.log(package)
    return 8.44
  }
}
function USPS() {
  this.calculate = (package) => {
    console.log(package)
    return 6.25
  }
}

function Shipping() {
  this.company = ''
  this.setStrategy = (company) => {
    this.company = company
  }
  this.calculate = (package) => {
    return this.company.calculate(package)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = { from: 'MA', to: 'NY', weight: 1.56 }

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log('Fedex:' + shipping.calculate(package))
