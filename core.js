var nombre = 'Alberto', 
    apellido = 'Jose'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //comilla invertida

var str = nombre.substr(1, 2)

console.log(nombreCompleto)