/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

		Ezequiel Bamio

*/
function SacarResto()
{
	let dividiendo; 
	let divisor;
	let resultado;

	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	resultado = num1 % num2;

	alert("El resto es " + resultado);
}
