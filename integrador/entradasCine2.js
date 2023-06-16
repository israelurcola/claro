/*Nos piden que escribamos la función asientosDisponibles(), 
que tome como parámetro un conjunto de asientos disponibles 
y el asiento que quiere ocupar la persona. Nuestra función 
deberá verificar si el asiento solicitado se encuentra 
disponible y devolverle un mensaje claro y prolijo al cliente 
como en los ejemplos siguientes:
Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"*/

function  asientosDisponibles(){
    console.log("entro 1 funcion ");
    for (let i =1 ; i <= asientosDisponibles; i++){
        
         console.log("entro 2  for  ");
        if(asientosDisponibles[i][0]==i){
            return (console.log("losto"));
        }

    }

}
asientosDisponibles([15, 28, 44, 45, 70], 15);