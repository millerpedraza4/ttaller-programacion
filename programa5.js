radio=prompt("digite el radio")
pi=3.1416
perimetro=2*pi*radio
area=pi* radio*radio
alert("el perimetro de circulo es: "+perimetro)
alert("el area del circulo de area es: "+area)
	
	nota1=parseInt(prompt())
	nota2=parseInt(prompt())
	nota3=parseInt(prompt())
	nota4=parseInt(prompt())
	promedio=(nota1+nota2+nota3+nota4)/4
	alert("el promedio es"+promedio)

	
     function calculadora(num1,num2,operacion){
     if(operacion=="suma"){
        resultado=num1+num2
  }else if(operacion=="resta"){
  	    resultado=num1-num2
  }else if(operacion=="multiplicacion"){
  	    resultado=num1*num2
  }else if(operacion=="division"){
  	    resultado=num1/num2
  	  }
  	  return resultado

}
function mostrarMensajes(){
    alert("este es un mensaje")
}

function mostrarResultado(valor){
	alert("EL resultado es:"+valor)}