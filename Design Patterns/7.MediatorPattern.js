// What is the Mediator pattern?
// The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other. The "central" object is known as the 'mediator'. The mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.

function Member(name) {
  this.name = name
  this.chatRoom = null
}
Member.prototype = {
  send: function (message, toMember) {
    this.chatRoom.send(message, this, toMember)
  },
  received: function (message, fromMember) {
    console.log(` ${fromMember.name} to ${this.name} :${message}`)
  },
}

function ChatRoom() {
  this.members = {}
}

chatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member
    member.chatRoom = this
  },
  send: function (message, fromMember, toMember) {
    toMember.received(message, fromMember)
  },
}

const chat = new ChatRoom()
const bob = new Member()
const john = new Member()
const tim = new Member()

chat.addMember(bob)
chat.addMember(john)
chat.addMember(tim)

bob.send('hello', john)
