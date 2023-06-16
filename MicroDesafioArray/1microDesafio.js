let arregloLimpieza=["desterjete","escobillon","liquido piso","esponja","lavandina","regilla","trapo de piso"];
let extraePrimer= arregloLimpieza.shift();
arregloLimpieza.push(extraePrimer);
arregloLimpieza.push("virulana");


console.log(arregloLimpieza);
console.log(arregloLimpieza.length);
console.log(arregloLimpieza.lastIndexOf("virulana"));
/*let producto = arregloLimpieza.lastIndexOf("virulana")={
    if("virulana"=="virulana"){
        return "existe";
    }
    else {
        return "el producto buscado no existe ";
    }
        
}*/

let unifi = console.log(arregloLimpieza.join("; ,"));
let remplazo = arregloLimpieza.replace("virulana","sopa");
console.log(remplazo);
//console.log(arregloLimpieza.join("; ;"));