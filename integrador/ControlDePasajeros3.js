/*Para ayudar a la empresa escribamos una función reporteDePasajeros()
, la cual cuando reciba la cantidad de estaciones que avanzó el tren 
nos devuelva un reporte de la cantidad de cada una de las estaciones 
y la cantidad de pasajeros que lleva el tren. La empresa nos provee 
los siguientes datos:
El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación 
central es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual
 nos pasan los siguientes ejemplos:*/
 function reporteDePasajeros(){
        for(let i =1 ; i <=5; i++){
           let estacion =200;
           if(i[2]<=i == true ){
            estacion += 50-30
            console.log("hola if");
           }
          
           console.log("En la estacion "+i+" hay "+estacion+" pasajeros arribadel tren " );
    }


}
reporteDePasajeros();
 //*console.log("ingreso al primer for ");
            
            /*for(let m =1 ; m<=4 ;m++){
                let estacion= 200;
                //*console.log("ingreso al segundo for ");
                estacion += 50-30
                console.log("En la estacion "+i+" hay "+estacion+" pasajeros arribadel tren " );
            }*/