/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

	Ezequiel Bamio

*/

function mostrar()
{

	let numeroIngresado;
	let esPrimo;
	let i;

	esPrimo = true;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			esPrimo = false;
		}
	}

	if(esPrimo == true)
	{
		console.log("El numero es primo");
	}else
	{
		console.log("El nombre no es primo");
	}


}//FIN DE LA FUNCIÓN
