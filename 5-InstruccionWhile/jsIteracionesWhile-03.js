/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

	EZEQUIEL BAMIO
*/
function mostrar()
{
	var claveIngresada;
	let cont;
	cont = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750" && cont < 2)
	{
		claveIngresada = prompt("Contraseña incorrecta");
		cont = cont + 1;
	}
	
	if(cont == 2)
		{
			alert("El limite de intentos es de 3. Has sido bloqueado temporalmente");
		}else
		{
			alert("Contraseña correcta, Bienvenido");
		}


	
}//FIN DE LA FUNCIÓN
