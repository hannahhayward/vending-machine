import { ProxyState } from "../AppState.js";


//private
function _drawReeses(){
  let reeses = ProxyState.reeses
  let reesesTemplate = /*html*/ `
  <div class = "col-6">
  <div class = "card w-100">
  <div class = "card-body text-center">
  <img src = "${reeses.image}" class="w-100"/>
  <h3> ${reeses.name} Price: ${reeses.price} </p>
  </div> </div> </div> `
  document.getElementById('reeses').innerHTML = reesesTemplate
}
export class ReesesController{
  //public
  constructor(){
    ProxyState.on('reeses', _drawReeses) 
    _drawReeses()
  }
}