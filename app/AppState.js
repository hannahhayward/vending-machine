
import { Gardettos } from "./Models/Gardettos.js"
import { Reeses } from "./Models/Reeses.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Gardettos[]} */
  gardettos = new Gardettos('Gardettos', 1.99,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6xIVweuNLcXT-W3eejviLSXOOWS-MyVECw&usqp=CAU")
  reeses = new Reeses('Reeses PB Cups', 1.00, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieQUF1SDx87ZgvvXWUyaqbfx7F6JGelYspw&usqp=CAU")
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
