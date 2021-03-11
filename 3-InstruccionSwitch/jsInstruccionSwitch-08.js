//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

//      Ezequiel Bamio
function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
	}

}//FIN DE LA FUNCIÓN