let resultado = document.getElementById('resultado'); 

let asignar= (valor)=>{
    //ShortHand 
    resultado.value +=valor;
}

//Arrow Function se asigna la función a una variable
let calcular = () => {
    resultado.value = eval(resultado.value); //eval: recibe una cadena y la evalua como una expresion matematica
}
let limpiar= () =>{
    resultado.value = '';
}

let seno= ()=>{
    resultado.value = Math.sin(resultado.value);
}
let coseno= ()=>{
    resultado.value = Math.cos(resultado.value);
}
let tangente= ()=>{
    resultado.value = Math.tan(resultado.value);
}   
let cuadrado= ()=>{
    resultado.value = Math.pow(resultado.value,2);
}
let raiz= ()=>{
    resultado.value = Math.sqrt(resultado.value);
}