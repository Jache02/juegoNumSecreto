var altura = 0;
var peso = 0;
var imc = 0;
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('.container__boton','Altura');
asignarTextoElemento('p','Para calcular tu indice de masa corporal primero introduce tu altura en metros');
asignarTextoElemento('#reiniciar','Peso');



function verificarIntento(){
    altura = parseInt(document.getElementById('valorUsuario').value);
    if (altura > 0){
    console.log(altura);
    document.querySelector('#valorUsuario').value = '';
    asignarTextoElemento('p','Ahora ingresa tu peso en kilogramos');
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.querySelector('#calcular').setAttribute('disabled','true');  
}else {
    asignarTextoElemento('p','Rellena el campo antes de continuar');
}
}
function reiniciarJuego(){
    peso = parseInt(document.getElementById('valorUsuario').value);
    console.log(peso);
    if (peso > 0){
    let alturaCuadrada = altura * altura;
    imc = (peso / alturaCuadrada)*1000;
    document.querySelector('#valorUsuario').value = '';
    asignarTextoElemento('p',`Tu indice de masa corporal es ${imc}`);
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
    }else {
        asignarTextoElemento('p','Rellena el campo antes de continuar');
    }
}
/*
function calcularImc(){
    let alturaCuadrada = altura * altura;
    imc = peso / alturaCuadrada;
    document.querySelector('#valorUsuario').value = '';
    asignarTextoElemento('p',`Tu indice de masa corporal es ${imc}`);
}*/

/*
function reiniciar(){
    asignarTextoElemento('p','Para calcular tu indice de masa corporal primero introduce tu altura en metros');
    asignarTextoElemento('.container__boton','Guardar');
    altura = 0;
    peso = 0;
}

function reiniciarJuego(){
    reiniciar();
}
*/

