/*1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.*/
console.log("111111111111111111111111111111111111111");
function valorDies(numero){
        for(let i = 1 ; i < 11; i++ ){
            console.log(numero + i );
        }
}
valorDies(25);
/*Imprimir los números entre el 1 y el 57, saltando de tres en tres.*/
console.log("2222222222222222222222222222222222222222");
function saltarTres(){
    for(let i =1 ; i <58 ;i++){
        if(i % 3==0){
            console.log(0+i);
        }
    }
}
saltarTres();
console.log("33333333333333333333333333333333333333");
/*Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.*/
function sumatoria(){
    for(let i =0 ; i < 101; i++){
        console.log("suma : "+i);
    }
}sumatoria();
console.log("444444444444444444444444444444444444444");
/*Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.*/
function cadenaTexto(texto){
    for(let i =0; i < texto.length -1; i++){
        console.log(texto[i].toUpperCase());
    }  
}
cadenaTexto("hola como va  todo bien ");

console.log("55555555555555555555555555555555555555555");
/*Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2. */
let numero=[12,23,45,23,11,56,88,99,10];
function numeroPar(arrayNumeroPositivos){
    let arrayPar=[];
    for(let  i=0; i < arrayNumeroPositivos.length; i++ ){
        if(arrayNumeroPositivos[i]%2===0){
            console.log(arrayPar.push(i));
        }
    }
}

numeroPar(numero);
