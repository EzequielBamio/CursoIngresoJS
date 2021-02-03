/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

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

