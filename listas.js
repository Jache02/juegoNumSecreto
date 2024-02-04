let listaGenerica = [];

let listaDeLenguajes = ['JavaScript','C','C++','Kotlin','Python'];

listaDeLenguajes.push('Java','Ruby','GoLang');

function muestraListaCompleta(){
    //alert(listaDeLenguajes);
    console.log(listaDeLenguajes);
}

function mostrarLenguagesReversoSeparadamente() {
    for (let i = listaDeLenguajes.length - 1; i >= 0; i--) {
      console.log(listaDeLenguajes[i]);
    }
}

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);




function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      console.log(i);
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}  



encontrarIndiceElemento(listaDeLenguajes,'Kotlin');
muestraListaCompleta();
mostrarLenguagesReversoSeparadamente();
