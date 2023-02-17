// What is the Observer design pattern?
// The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). This pattern is the cornerstone of event driven programming.

function Subject() {
  this.observers = [] // array of observers functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn)
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) {
        return fn
      }
    })
  },

  trigger: function () {
    this.observers.forEach((fn) => {
      fn.call()
    })
  },
}

const subject = new Subject()

function Observer1() {
  console.log('Observer 1 Triggered')
}
function Observer2() {
  console.log('Observer 2 Triggered')
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.trigger()
