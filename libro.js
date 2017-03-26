function primerText(){
  var area = document.getElementById("textoArea").value;
  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}

function enviar(){
  var textoCopia = document.getElementById("text").cloneNode();
  textoCopia.innerText = document.getElementById("text").innerText;
  
}

function textoGrande(){
  document.getElementById("text").style.fontSize = "xx-large";
}
function textoMediano(){
  document.getElementById("text").style.fontSize = "medium";
}
function textoChico (){
  document.getElementById("text").style.fontSize = "small";
}
function colorTexto (){
  var color = prompt("Ingresa color hexadecimal:");
  document.getElementById("text").style.color =  color; 
}
function colorFondo (){
  var fondo = prompt("Ingresa color hexadecimal:");
  document.getElementById("text").style.background = fondo; 
}
function alinearIzq (){
  document.getElementById("text").style.textAlign = "left";
}
function alinearCentro (){
  document.getElementById("text").style.textAlign = "center";
}
function alinearDer (){
  document.getElementById("text").style.textAlign = "right";
}
