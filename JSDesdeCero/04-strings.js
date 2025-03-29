let myName = "Jose"
let greetting = "¡Bienvenido, "+ myName + "!" //concatenación de cadenas de texto con el operador +
console.log(greetting)
//Longitud de cadena de texto
console.log("la longitu del saludo es de: ",greetting.length)
//Acceso a un caracter
console.log(greetting[17])
//metdos comunes
console.log(greetting.toUpperCase())
console.log(greetting.toLowerCase())
console.log(greetting.indexOf("Jose"))
console.log(greetting.includes("Bienvenido"))
console.log(greetting.includes("Juan"))
console.log(greetting.slice(0,12))
console.log(greetting.replace("Jose","Dario"))

//Platillas literaria

let message = `Hola, esto es una 
               plantilla literaria`
console.log(message)

//Interpolación de 
let email = "jose@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)