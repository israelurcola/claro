function alquilerVehiculo(tipoVehiculo,silla,dia){
    let precioPorDia = 0;
    switch (tipoVehiculo){
        case "compacto":
            precioPorDia = 14000;
            break ;
         case "mediano":
            precioPorDia = 17000;
             break ;
        case "camioneta":
            precioPorDia = 28000;
            break;
        default :
            return console.log("no ingreso una opccion correta");
        }
    if(silla){
        precioPorDia += 1200;
    }
    let total = precioPorDia*dia;
//*console.log("estimado cliente : en base al tiempo de vahiculo "+tipoVehiculo+" alquilado, considerando los "+dia+" dias utilizados  el monto a pagar es de $ "+total);
    return total;
}
//*alquilerVehiculo("camioneta",false,3);

function mensaje(tipoVehiculo,silla,dia,callback){
    let total1 = callback(tipoVehiculo,silla,dia);
    console.log("el total es "+ total1);
}
mensaje("compacto",true,2, alquilerVehiculo);

