//Retos semana 9
//==========================================================================//
// 1. Haya el promedio de todos los elementos del arreglo.
// Ejm:
// Entrada: [2, 6, 1, 8]
// Salida:
// Promedio: 4.25

// //Respuesta:
let entradaA = prompt("Ingrese los números separados por comas:");
let partesA = entradaA.split(",");
let suma = 0;

for (let i = 0; i < partesA.length; i++) {
    suma = suma + Number(partesA[i]);
}

let promedio = suma / partesA.length;
console.log("Arreglo: {" + entradaA + "}")
console.log("Promedio:", promedio);

//==========================================================================//