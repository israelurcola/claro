/*Escribí la función sumatoriaBajoImporte la cual recibiendo
un array con importes nos devuelva el resultado final de la 
suma de los importes de todos los meses que tienen ganancia, 
a excepción de los que superen un importe de $ 1.000*/


function sumatoriaBajoImporte (importes){
    console.log("hola  1");
    
    for(let i = 0 ; i < importes ; i++){
        console.log("hola  2");
        if(importes[i]< 1000){
            return (console.log(i+=i));
        }
    }
    console.log("hola  3");1
}

let importes=[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];
sumatoriaBajoImporte(importes);
