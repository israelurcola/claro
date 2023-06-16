let arraymoMovimiento =[5500, -15000 , 40000, -500];
let nombre =" ";
let apellido=" ";

function calcularCuenta (arraymoMovimiento){
    let deposito =0;
    let retiro = 0;
    let saldoActual = 0;
    for (let i = 0 ; i  <  arraymoMovimiento.length; i++){
            if(arraymoMovimiento[i]>0){
                deposito += arraymoMovimiento[i];
        }else {
            retiro -= arraymoMovimiento[i];
        }
    };
    saldoActual = deposito - retiro;
    return {deposito:deposito,retiro:retiro,saldoActual:saldoActual}//objetos//
}
function cliente (nombre,apellido,arraymoMovimiento){
    let cuenta = calcularCuenta(arraymoMovimiento);
    console.log("estimado : "+nombre+" "+apellido+":");
    console.log("el monto total del deposito es de : "+cuenta.deposito);
    console.log("el monto total de los retiros es de  : "+cuenta.retiro);
    console.log("por lo tanto, su saldo actual en la cuenta es de : "+cuenta.saldoActual);
}
cliente ("naruto","Uzumaki",arraymoMovimiento);