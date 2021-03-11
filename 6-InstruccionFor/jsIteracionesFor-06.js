/*
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

	Ezequiel Bamio

*/
function mostrar()
{
	let i;
	let numeroIngresado;

	let contadorPares;
	contadorPares = 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 0; i < numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			contadorPares++;
		}
	}

	console.log("La cantidad de numeros pares encontrados es: " + contadorPares);



}//FIN DE LA FUNCIÓN