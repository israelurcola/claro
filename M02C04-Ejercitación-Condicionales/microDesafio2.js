// AJUSTAR TARIFARIO DE ENERGIA ELECTRICA
//USAR OPERARDOR  CONDICIONAL TERNARIO
let pagoMes = 11552;
let conusmodealgo = 250;

let  resultado = (conusmodealgo > 300 ) ? (pagoMes * 1.20) : (pagoMes + " no paga  aumento");
    console.log("Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%, cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400");

/*if(conusmodealgo >300){
    let resultado = (pagoMes * 1.20 );
    console.log("Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%, cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400");
}else {
    console.log("no tiene aumento");
}*/


