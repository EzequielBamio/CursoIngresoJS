/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"

	Ezequiel Bamio

*/ 



function sumar()
{	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("La suma es " + resultado);
}

function restar()
{
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 - num2;

	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 * num2;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 / num2;
	
	alert("La division es " + resultado);
}

