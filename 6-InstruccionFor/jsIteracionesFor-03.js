/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

	Ezequiel Bamio

*/
function mostrar()
{
	let i;
	let repeticiones = prompt("ingrese el número de repeticiones");
	for(i = 0; i < repeticiones; i++)
	{
		document.write("Hola UTN FRA <br>");
	}


}//FIN DE LA FUNCIÓN