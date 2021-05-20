import { ProxyState } from "../AppState.js";


//private
function _drawGardettos(){
  let gardettos = ProxyState.gardettos
  let gardettosTemplate = /*html*/ `
  <div class = "col-6">
  <div class = "card w-100">
  <div class = "card-body text-center ">
  <img src="${gardettos.image}" class="w-100">
  <h3> ${gardettos.name} Price: ${gardettos.price} </p> </div> </div> </div>`
  document.getElementById('chips').innerHTML = gardettosTemplate
}
export class GardettosController{
  //public
  constructor(){
    ProxyState.on('gardettos', _drawGardettos)
    _drawGardettos()
  }
}