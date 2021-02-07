/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

		Ezequiel Bamio

*/
function SacarResto()
{

	let num1;
	let num2;
	let suma;
	let promedio;
	let modulo;

	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;
	promedio = suma / 2;
	modulo = num1 % num2;

	console.log("Los numeros ingresados son: " + num1 + " y " + num2 + " La suma de estos numeros es de: " + suma + " y el promedio es de: "
	+ promedio + " y por ultimo el modulo es: " + modulo);














/*
	let dividiendo; 
	let divisor;
	let resultado;

	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	resultado = num1 % num2;

	alert("El resto es " + resultado);

*/

}
