let resultado = document.getElementById('resultado'); 

function asignar(valor){
    //ShortHand 
    resultado.value +=valor;
}

//Arrow Function se asigna la función a una variable
let calcular = () => {
    resultado.value = eval(resultado.value); //eval: recibe una cadena y la evalua como una expresion matematica
}
function limpiar(){
    resultado.value = '';

}

function seno(){
    resultado.value = Math.sin(resultado.value);
}
function coseno(){
    resultado.value = Math.cos(resultado.value);
}
function tangente(){
    resultado.value = Math.tan(resultado.value);
}   
function cuadrado(){
    resultado.value = Math.pow(resultado.value,2);
}
function raiz(){
    resultado.value = Math.sqrt(resultado.value);
}