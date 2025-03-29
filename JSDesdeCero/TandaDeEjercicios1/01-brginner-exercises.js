//1. Escribe un comentario en una linea
//Esto es un comentario de una linea.
//2.Escribe un comentario de varias lineas
/*
Esto es un comentario
que se puede emplear en 
varias líneas de código
*/
//3.Declara variables con diferentes tipos de datos primitivos
//Dato de tipo Symbol
mySymbol = Symbol("mysymbol")
console.log("Esto es un dato de tipo symbol")
console.log(mySymbol)
console.log("El tipo de dato es: ", typeof(mySymbol))
//Dato númerico
let Edad = 15
console.log("Esto es una Variable empleando let de un dato de tipo number:")
console.log(Edad)
console.log("El tipo de dato es:", typeof(Edad))
console.log("Reemplando el dato de la variable ahora sera...")
console.log(Edad)
//String
let cadena = "Esto es una cadena de texto"
console.log("Esto es una variable de tipo String")
console.log(cadena)
console.log("El tipo de da dato es:", typeof(cadena))
console.log("Reemplazando el tipo de dato de la variable ahora sera...")
cadena = "Hola, JavaScript"
console.log(cadena)

//Boolean
let EsVerdad = true
console.log("Esto es un dato de tipo booleano")
console.log(EsVerdad)
console.log("El tipo de dato es de tipo: ", typeof(EsVerdad))
console.log("Las variables las puedo reescribir con otro valor del mismo tipo")
EsVerdad = false
console.log("Ahora el valor para este varible sera falso:")
console.log(EsVerdad)
//BigInt
let myBigInt = BigInt(1234567899542315647895424)
console.log("Esto es un tipo de dato BigInt")
console.log(myBigInt)
console.log("El tipo de dato es: ", typeof(myBigInt))
myBigInt = BigInt(98745612332165487925784156314)
console.log("Ahora el valor para este varible sera....")
console.log(myBigInt)
//undefined
let valorIndefinido = undefined
console.log("Este es un tipo de dato indefinido")
console.log(valorIndefinido)
console.log("El tipo de dato es:", typeof(valorIndefinido))
valorIndefinido = "String"
console.log(valorIndefinido)
console.log(typeof(valorIndefinido))
//null
let valorNulo = null
console.log("Este es un tipo de dato Nulo")
console.log(valorNulo)
console.log("Este tipo de dato es:", typeof(valorNulo))
console.log("Ahora dejara de ser un valor nulo...")
valorNulo = 5
console.log(valorNulo)
console.log(typeof(valorNulo))
