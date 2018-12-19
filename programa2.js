console.log("ejercioso 2 condicionales")
var edad=22
if(edad>12){
	console.log("es mayor de edad")
}else{
	console.log("es menor de edad")
} 
var num=2
if(num==1){
    console.log("EL numero es UNO")
}else if(num==2){
     console.log("EL numero es DOS")
}else if(num==3){
    console.log("EL nuemero es TRES")
}else{
    console.log("NO ESTA EN LA LISTA")
    }

//ejercisio de condicional con dos variables 
var edad=20//respuesta la edad de la persona
var genero="hombre"//"hombre" "mujer"

if(edad>=18 && genero=="hombre"){
	console.log("Bienvenido señor")
}else if(edad<=17 && genero=="mujer"){
	console.log("Bienvenida señorita")
}else{
	console.log("No se cumplieron ")
}

if(edad<0 || edad>100){
	console.log("la edad es incorrecta")
}
