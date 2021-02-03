/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

		Ezequiel Bamio

*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoTotal;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 /100;	//calculo el porcentaje
	sueldoTotal = sueldo + aumento; //suma del sueldo mas el aumento del 10%

	//Otra forma de hacerlo
	//sueldoTotal = sueldo * 1.1;

	document.getElementById("txtIdResultado").value = sueldoTotal;
}
