/*  1.- Dado el objeto empleados, extrae la empleada Ana completa. */
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [ , ana,  ] = empleados;


/* 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com*/
let [ empleado ] = empleados;
let emailLuis = empleado.email;


/* 3.- Usa destructuración para cambiar los valores de a y b; */
let a = 5;
let b = 3;

[a, b] = [3, 5]


/* 4.- Dado el objeto HIGH_TEMPERATURES */
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

let { today: maximaHoy, tomorrow:maximaManana } = HIGH_TEMPERATURES;


// 5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos
const sumEveryOther = (...args) => args.reduce((a, b) => a + b, 0)


// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
const addOnlyNums = (...args) => args.filter(ele => typeof ele === "number").reduce((a,b) => a + b, 0)


// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
const countTheArgs = (...args) => args.length;


// 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2]


// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (...args) => [... new Set(args)]


/* 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.*/
const combineAllArrays = (...arr) => {
  let combinedArr = [];
  arr.forEach(ele => combinedArr = [...combinedArr, ...ele]);
  return combinedArr
};
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


/* 11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.*/
const sumAndSquare = (...args) => args.map(ele => ele ** 2).reduce((a, b) => a + b, 0)