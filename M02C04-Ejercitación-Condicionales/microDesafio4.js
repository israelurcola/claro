//mi primera calculadora//
let numero1 = 16;
let numero2 = 2;
let operacion= "dividir";

switch (operacion){
    case "suma":
        console.log("el resultado es : "+ (numero1+numero2));
        break;
    case "resta":
        console.log("el resultado es : " +(numero1-numero2));
        break;
    //case ("multiplicacion"||"multi"||"Multi"):
    case ("multiplicacion"):
        console.log("el resultado es : "+(numero1*numero2));
        break;
    case "dividir":
        console.log("el resultado de la divi es : "+(numero1 / numero2));
        break;
    default:
        console.log("no selecciono ninguna operacion ");
}