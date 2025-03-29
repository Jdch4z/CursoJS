//Operadores
//operador aritmetico
let a = 2
let b = 6

//Básicos
console.log(a + b)//suma
console.log(a - b)//resta
console.log(b/a)//División
console.log(b*a)//Multimetro

console.log(b ** a)//Exponencial
console.log(b % a)//módulo

a++
console.log(a)//Incremento

b--
console.log(b)//Decremento

//Operadores de asignación
/*console.log("Esto es una modificación de variable")
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **=2
console.log(myVariable)
*/
//Operadores de comparación

console.log(a > b)
console.log (a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a == 6)
console.log(a == 3) //Igualdad por valor
console.log(a == "3") //Igualdad por valor
console.log(a === 3) //Igualdad por identidad (valor y tipo)
console.log(a === 6)
console.log(a === "3")
console.log(a != 6) //Diferencia
console.log(a !== 6) //Diferencia por identidad
//Comparación por Boolean de tipo identidad
console.log( 0 == false)
console.log(1 == true)
console.log(1 != true)
console.log(0 != false)
//No se cumple porque uno es de tipo boolean y el otro es de tipo number
console.log(1 === true)
console.log(0 === false)

//Operadores Lógicos.
//and (&&)
console.log("Operador Lógico and:")
console.log(5 < 10 && 5 > 3)
//Or (||)
console.log("Operador lógio or:")
console.log(5 > 10 || 5 < 6)
// not !
console.log("Aplicando la negación:")
console.log(!(5 < 10 && 5 > 3))

//Operadores ternarios
const isRaining = true
console.log("¿Esta lloviendo?")
isRaining ? console.log("Si, esta lloviendo"):("No, no esta lloviendo") 