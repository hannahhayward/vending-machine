
import { Gardettos } from "./Models/Gardettos.js"
import { Reeses } from "./Models/Reeses.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  gardettos = new Gardettos('Gardettos', 1.99)
  reeses = new Reeses('Reeses PB Cups', 1.00)
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
