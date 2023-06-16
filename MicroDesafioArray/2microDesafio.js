let arrayPeli =["turno de dia","30 noches con miex","bestia","el monte","top gun maverick","elvis","thor: amor y trueno"];
console.log("------>>>>aca empiesa------<<<");
let lugar=arrayPeli.indexOf("thor: amor y trueno");
///console.log(lugar);
let sacarElemento = arrayPeli.pop(lugar);
let convertir = sacarElemento.toUpperCase();
let ingresarElemento =arrayPeli.unshift(convertir);
console.log(sacarElemento);
console.log(arrayPeli);
//--------------------------------------------------------------////
let arrayEstrenos = ["conter-Strike","NOP","vertigo","Nick","Avatar"];
console.log(arrayEstrenos.join(" , "));
//-------------------------------------------------------///
let borrarElemento = arrayEstrenos.shift();
console.log(arrayEstrenos);
//----------------------------------------------------------------///
console.log(arrayPeli.concat(arrayEstrenos));
