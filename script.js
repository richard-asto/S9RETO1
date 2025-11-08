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

// 2. De un arreglo de números, retornar la suma de todos los números pares.
// Ejm:
// Entrada: [1, 2, 5, 8, 9, 12, 2, 3]
// Salida: 2+8+12+2 = 24

//Respuesta:
let entradaB = prompt("Ingrese los números separados por comas:");
let partesB = entradaB.split(",");
let sumaPares = 0;

for (let i = 0; i < partesB.length; i++) {
    let num = Number(partesB[i]);
    if (num % 2 === 0) {
        sumaPares = sumaPares + num;
    }
}
console.log("Arreglo: {" + entradaB + "}")
console.log("Suma de números pares:", sumaPares);

//==========================================================================//