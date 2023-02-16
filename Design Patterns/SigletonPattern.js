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

console.log(ProcessManager)
console.log(ProcessManager === ProcessManager2)
