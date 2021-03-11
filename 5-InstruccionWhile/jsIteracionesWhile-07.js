/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numUsuario;
	contador=0;
	acumulador=0;
	respuesta='si';

	respuesta = respuesta.toLowerCase()

	while(respuesta == "si")
	{
		numUsuario = prompt("Ingrese un numero");
		numUsuario = parseInt(numUsuario);
		acumulador = acumulador + numUsuario;
		contador = contador + 1;

		respuesta = prompt("Quiere seguir ingresando numeros? Si o No");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN