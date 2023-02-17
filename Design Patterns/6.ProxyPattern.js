// What is a proxy object?
// A proxy object is an object that acts as an interface (or placeholder) for something else. The proxy could be an interface to anything: an API, a network connection, a large object in memory, or some other resource that is expensive or impossible to duplicate.

// A proxy is a 'stand-in' object that is used to access the 'real' object behind the scenes. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.

function CryptoAPI() {
  this.getValue = function (coin) {
    console.log('Calling CryptoAPI')

    switch (coin) {
      case 'BTC':
        return ' $20,000'
      case 'Solana':
        return '$22.59'
      case 'Eth':
        return '$1,600'
    }
  }
}
// const api = new CryptoAPI()
// console.log(api.getValue('BTC'))

function CryptoProxy() {
  this.api = new CryptoAPI()
  this.cache = {}

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin)
      {
        return this.cache[coin]
      }
    }
  }
}

const proxy = new CryptoProxy()

console.log(proxy.getValue('BTC'))
console.log(proxy.getValue('Solana'))
console.log(proxy.getValue('Eth'))
