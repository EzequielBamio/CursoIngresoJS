/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10- De los negativos el mas grande y de los pares el mas chicos.

TEST:
1. -2 -4 -20 = -26
2. 10 5 15 4 = 34
3. 4 Positivos
4. 3 Negativos
5. 2 Ceros
6. 7 Pares
7. 8.5 Promedio +
8. -8.6 Promedio -
9. 17.1 de diferencia

	Ezequiel Bamio

*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivo;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var difPositivoNegativo;
	var mayorNegativo;
	var menorPar;

	sumaNegativos = 0;
	sumaPositivo = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;


	respuesta="si";

	while(respuesta=="si")
	{

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR: Reingrese un numero");
		}
	
		if(numeroIngresado < 0) //Suma y contador de Negativos
		{
			if(numeroIngresado > mayorNegativo || contadorNegativos == 0)
			{
				mayorNegativo = numeroIngresado;
			}
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;

		}else
		{
			if(numeroIngresado == 0) //Contador de 0
			{
				contadorCeros = contadorCeros + 1;
			}else //Suma y contador de Positivos
			{
				sumaPositivo = sumaPositivo + numeroIngresado
				contadorPositivos = contadorPositivos + 1;
			}
		}

		if(numeroIngresado % 2 == 0) //Contar numeros pares
		{
			if(numeroIngresado < menorPar || contadorPares == 0)
			{
				menorPar = numeroIngresado;
			}
			contadorPares = contadorPares + 1;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while


	document.write("la suma de negativos es: " + sumaNegativos + " y el mayor de los negativos es: " + mayorNegativo + "<br>");
	document.write("la suma de positivos es: " + sumaPositivo + "<br>");
	document.write("la cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("la cantidad de pares es: " + contadorPares + " y el menor de los pares es: " + menorPar + "<br>");
	if(contadorNegativos != 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		document.write("el promedio de los negativo es: " + promedioNegativos + "<br>");
	}else
	{
		document.write("el promedio de los negativos es: No hubo numeros negativos <br>");
	}
	if(contadorPositivos != 0)
	{
		promedioPositivos = sumaPositivo / contadorPositivos;
		document.write("el promedio de los positivos es: " + promedioPositivos + "<br>");
	}else
	{
		document.write("el promedio de los positivos es: No hubo numeros positivos <br>");

	}
	//ERROR CUANDO NO HAY PROMEDIO POSITIVO/NEGATIVO
	if(contadorNegativos != 0 && contadorPositivos != 0)
	{
		difPositivoNegativo = promedioPositivos - promedioNegativos;
		document.write("la diferencia entre positivos y negativos es: " + difPositivoNegativo + "<br>");
	}else
	{
		document.write("No se puede hacer la diferencia entre positivos y negativos.  <br>");
	}
	

}//FIN DE LA FUNCIÓN












/* EJERCICIO 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 

TEST:
1. -2 -4 -20 = -26
2. 10 5 15 4 = 34
3. 4 Positivos
4. 3 Negativos
5. 2 Ceros
6. 7 Pares
7. 8.5 Promedio +
8. -8.6 Promedio -
9. 17.1 de diferencia

	Ezequiel Bamio

*/
/*function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivo;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var difPositivoNegativo;

	sumaNegativos = 0;
	sumaPositivo = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;


	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	
		if(numeroIngresado < 0) //Suma y contador de Negativos
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;

		}else
		{
			if(numeroIngresado == 0) //Contador de 0
			{
				contadorCeros = contadorCeros + 1;
			}else //Suma y contador de Positivos
			{
				sumaPositivo = sumaPositivo + numeroIngresado
				contadorPositivos = contadorPositivos + 1;
			}
		}

		if(numeroIngresado % 2 == 0) //Contar numeros pares
		{
			contadorPares = contadorPares + 1;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivo / contadorPositivos;
	difPositivoNegativo = promedioPositivos - promedioNegativos;



	document.write("la suma de negativos es: " + sumaNegativos + "<br>");
	document.write("la suma de positivos es: " + sumaPositivo + "<br>");
	document.write("la cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("la cantidad de pares es: " + contadorPares + "<br>");
	document.write("el promedio de los positivos es: " + promedioPositivos + "<br>");
	document.write("el promedio de los positivos es: " + promedioNegativos + "<br>");
	document.write("la diferencia entre positivos y negativos es: " + difPositivoNegativo + "<br>");

}//FIN DE LA FUNCIÓN*/