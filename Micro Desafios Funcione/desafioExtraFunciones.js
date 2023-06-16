function miuscula(palabra){
    console.log(typeof(palabra)+"\n "+palabra.toUpperCase());
}
miuscula("hola");

function parametro (dato){
    console.log("\n "+typeof(dato));
}
parametro("sola");

function calcularEdadPerro(edad){
    console.log("LA EDAD DEL PERRO ES DE : "+edad*7+"\n ");
}
calcularEdadPerro(3);

function calcularHS(saliroMensual,diasTrabajados,cantHsTrabajadas){
    console.log("la hs de trabajo es de  :"+(saliroMensual/diasTrabajados)/cantHsTrabajadas);
}
calcularHS(300000,26,8);