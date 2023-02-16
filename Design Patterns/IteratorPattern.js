const items = [1, 'hello', true, 1.1]

function Iterator() {
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length
  },
  next: function () {
    return this.items[this.index++]
  },
}

const instanceIter = new Iterator(items)
console.log(instanceIter.next() === instanceIter.next())

//Not equal before every time the function is called it will keep the instance in memory and iterate through and print the next value
