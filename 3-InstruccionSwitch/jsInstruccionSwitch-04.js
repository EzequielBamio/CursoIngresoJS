function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;


	switch(mesDelAño)
	{
		case "Febrero":
			alert("Si tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Si tiene 30 días.");
			break;
		default:
			alert("Si tiene 31 días.");
			break;
	}
	
}//FIN DE LA FUNCIÓN

/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

	Ezequiel Bamio

*/