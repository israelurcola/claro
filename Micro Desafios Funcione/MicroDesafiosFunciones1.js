function tipoVehiculo(compacto,mediano,camioneta){
        if(compacto==compacto){
            return 14000;
        }else if(mediano==mediano){
            return 17000;
        }else if (camioneta== camioneta){
            return 28000;
        }else {
            return "no elijio nada ";
        }
    }
function sillaBebe(sillaBB){
    if(sillaBB==sillaBB){
        return 1200;
    }else {
        return 0;
    }
}
function alquilerVehiculo(tipoVehiculo,diaAlquiler,sillaBebe){
         
    let calculo=((tipoVehiculo+sillaBebe)*diaAlquiler);
        return calculo;

}
//*-----------------------------------<<<<<<<<<<<<<<<<<<<*/

function mensaje(tipoVehiculo,diaAlquiler,sillaBebe,callback){
    let total = callback(tipoVehiculo,diaAlquiler,sillaBebe)
}


let diaAlquiler= 2;

