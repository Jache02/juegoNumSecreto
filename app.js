let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


console.log(numeroSecreto)

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos}${(intentos == 1) ? ' vez' : ' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        // El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else{ 
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
   document.querySelector('#valorUsuario').value = '';
     
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function generaNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumeroSorteado);
//Si ya sorteamos todos los numeros mostramos un mensaje en pantalla
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {

        //Si el número generado esta en la lista 
        if (listaNumeroSorteado.includes(numeroGenerado)){
        return generaNumeroSecreto();
        }else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function reiniciarJuego (){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar un nuevo número aleatorio
    //Reiniciar el contador de intentos
    condicionesIniciales();
    //Desabilitar el boton de reinicio de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
}

condicionesIniciales();