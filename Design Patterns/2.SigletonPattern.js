// What is the Singleton design pattern?
// The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton. Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.

function Process(state) {
  this.state = state
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0
  }
  let instancePManager
  function createProcessManager() {
    instancePManager = new ProcessManager()
    return instancePManager
  }
  return {
    getInstance: function () {
      if (!instancePManager) {
        instancePManager = createProcessManager()
      }
      return instancePManager
    },
  }
})()

const ProcessManager = Singleton.getInstance()
const ProcessManager2 = Singleton.getInstance()

console.log(typeof ProcessManager)
console.log(ProcessManager === ProcessManager2)
