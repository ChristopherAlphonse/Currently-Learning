// What is the Iterator design pattern?
// The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects. A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

// The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized 'iterator'!

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
