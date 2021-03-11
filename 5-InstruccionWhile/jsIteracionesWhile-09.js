/*
- Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
- Se pide el menor de los pares y el mayor de los negativos.
 

	Ezequiel Bamio

TEST
	Numeros Ingresados: -13, -12, -3, 0, 1, 12, 60, 101

	Numero Maximo: 101
	Numero Minimo: -13

	Numero menor par: -12
	Numero mayor negativo: -3


*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var numeroMaximoNegativo;
	var menorPares;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = false;
	banderaPares = false;
	banderaMayorNegativo = false;
	respuesta='si';


	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//Numero maximo
		if(banderaDelPrimero == false || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		//Numero minimo
		if(banderaDelPrimero == false || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = true;
		}
		
		//Mayor negativo
		if(banderaMayorNegativo == false || numeroIngresado > numeroMaximoNegativo)
		{
			if(numeroIngresado < 0)
			{
				numeroMaximoNegativo = numeroIngresado;
				banderaMayorNegativo = true;
			}
		}
		//Menor par
		if(banderaPares == false || numeroIngresado < menorPares)
			{
				if(numeroIngresado % 2 == 0)
				{
					menorPares = numeroIngresado;
					banderaPares = true;
				}
			}

		respuesta = prompt("Quiere seguir ingresando numeros? si o no");

	}
	//FIN WHILE

	//Si el usuario no ingresa numeros Pares, sino se muestra el menor de los pares.
	if(banderaPares == false)
	{
		alert("No ingreso numeros Pares");
	}else
	{
		alert("El numero Menor de los Pares es: " + menorPares);
	}

	//Si el usuario no ingresa numeros negativos, sino se muestra el maximo de los negativos.
	if(numeroMaximoNegativo == false)
	{
		alert("No ingreso numeros negativos");
	}else
	{
		alert("El numero Mayor negativo es: " + numeroMaximoNegativo);
	}



	//Muestra el Maximo y Minimo de los numeros.
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}//FIN DE LA FUNCIÓN                

