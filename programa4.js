alert("Hola mundo")
var nombre=prompt("¿cual es tu nombre?")
alert("Bienvenido "+nombre)
var num=""
while(num==""){
   num=prompt("digite hasta cuando desea ")
}
//este codigo es para tal cosa
if(num==""){
	alert("cantidad no validad")
}else{  
    for(cont=0;cont<=num;cont++){
	alert(cont)
  }
}
var continuar=true
num=0
while(continuar){
	 continuar=confirm("el conteo va en: "+num+" desea continuar?")
	 num++
	}