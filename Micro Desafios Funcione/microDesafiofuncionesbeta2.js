function comidaCallback(tipoHambuergesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
   //* let tipoHambuergesa =" ";
    let sale = 0;
    let total =0;
    switch (tipoHambuergesa){
        case "carneParrilla":
            sale = 1800;
            break;
        case "pollo":
            sale= 1500;
            break;
        case "vegetariano":
            sale= 1200;
            break;
        default :
            return "no ingreso el tipo de hamburgesa correcto";  
    }
    if(jamon){
        total +=30;
    }if(queso){
        total  +=25;
    }if(salsaTomate){
        total +=5;
    }if (mayonesa){
        total +=5
    }if(mostaza){
        total +=5;
    }if(tomate){
        total +=15;
    }if(lechuga){
        total += 10;
    }if(cebolla){
        total +=10;
    }
return total+sale
}
function pedidoComida(nombreUsuario,apellidoUsuario,tipoHambuergesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla,callback){
    let respuesta1 = callback(tipoHambuergesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla);
    console.log("Estimado"+nombreUsuario+" "+apellidoUsuario+" el monto total a pagar es de: "+ respuesta1);
}
pedidoComida("naruto","uzumaki","pollo",true,true,true,true,true,true,true,true,comidaCallback);