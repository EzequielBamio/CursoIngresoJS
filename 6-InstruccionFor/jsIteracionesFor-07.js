/*
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
	
	Ezequiel Bamio

*/
function mostrar()
{
	//declaramos variables
	let i;
	let numeroIngresado;
	let contadorNumerosDivisores;

	contadorNumerosDivisores = 0;

	//pedir un numero
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	//mostrar los numeros divisores desde el 1 al numero ingresado
	for(i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorNumerosDivisores++;
			console.log("Los numeros divisores son: " + i);
		}

	}
	//mostrar la cantidad de numeros divisores encontrados
	console.log("La cantidad de divisores es: " + contadorNumerosDivisores);


}//FIN DE LA FUNCIÓN

