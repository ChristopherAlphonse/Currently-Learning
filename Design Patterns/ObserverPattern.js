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
  console.log('User 1 is subscribed')
}
function Observer2() {
  console.log('User 2 is subscribed')
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer2)
subject.trigger()
