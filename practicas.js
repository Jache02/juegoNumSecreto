function saludoGeneral(){
    console.log("¡Hola mundo desde la consola");
}
function saludo(nombre){
    nombre = prompt('Ingresa tu nombre');
    console.log(`¡Hola ${nombre}!`);
    
}
function multiplicacion (factor){
    return (factor * 2);
}
function promedio(numero1,numero2,numero3){
   /* numero1 = prompt("Calificación matemáticas");
    numero2 = prompt("Calificación ingles");
    numero3 = prompt("Calificación biología");*/
    let suma = numero1 + numero2 + numero3;
    let calificacion = (suma / 3);
    console.log(`Esta es tu calificación ${calificacion}`)
}

function numeroMayor(comparar1,comparar2){
    comparar1 = parseInt(prompt("Número a"));
    comparar2 = parseInt(prompt("Número b"));
    return comparar1 > comparar2 ? comparar1 : comparar2;
}
function potencia (aPotenciar){
    aPotenciar = parseInt(prompt("Ingresa el número a elevar al cuadrado"));
    console.log(aPotenciar * aPotenciar);
}
saludoGeneral();
saludo();
let resultadoDoble = multiplicacion(2);
console.log(resultadoDoble)
promedio(9,9,9);
let elMayor = numeroMayor();
console.log(`El mayor de los números es ${elMayor}`)
potencia();