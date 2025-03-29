//1. Defina variables 
let a = 2
let b = 6
//2.Realice las operaciones aritmeticas con las variables
console.log(a+b)
console.log(a-b)
console.log(b/a)
console.log(b%a)
console.log(a ** b)
a++
console.log( a)
b++
console.log( b)
//3. imprima 5 compraciones verdaderas diferentes con operadores de comparación
let c = 9

console.log(a < c)
console.log(a < b)
console.log(b <= c)
console.log(b >= a)
console.log(c != b)

//4. imprima 5 comparaciones false diferentes con operadore de comparación

console.log(c < a)
console.log(a >= c)
console.log( a === c)
console.log(b === a)
console.log(c <= b)

//5 utilizar el operador lógico and
 console.log( a < b && a < c && b > a)

 //6 utilizando el operador lógico or
console.log(a > b || c > b)

//7 combinación de operadores lógicos
console.log( a > b && c > b || !(a !== b))

//8 operadores ternarios
const isHot = false
console.log("Esta haciendo calor.")
isHot ? console.log("Si, esta haciendo calor"):console.log("No, esta haciendo frio.")

//9 combinacipn de condicionales
console.log((a+b)> c && (a+c) > b)
console.log((a-b) >= c || (a+c) < b)
