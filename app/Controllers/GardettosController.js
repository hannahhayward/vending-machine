import { ProxyState } from "../AppState.js";


//private
function _drawGardettos(){
  let gardettos = ProxyState.gardettos
  let gardettosTemplate = /*html*/ `
  <div class = "card">
  <div class = "card-body text-center">
  <img src="${gardettos.img}">
  <h3> ${gardettos.name} Price: ${gardettos.price} </p> </div> </div>`
  document.get
}