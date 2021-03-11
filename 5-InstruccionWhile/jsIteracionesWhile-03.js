/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

	EZEQUIEL BAMIO
*/
function mostrar()
{
	var claveIngresada;
	let intentos;
	intentos = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750" && intentos < 2)
	{
		claveIngresada = prompt("Contraseña incorrecta");
		intentos = intentos + 1;
	}
	
	if(intentos == 2)
		{
			alert("El limite de intentos es de 3. Has sido bloqueado temporalmente");
		}else
		{
			alert("Contraseña correcta, Bienvenido");
		}

}//FIN DE LA FUNCIÓN
