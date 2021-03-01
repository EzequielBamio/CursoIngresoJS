/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

		Ezequiel Bamio
*/ 

function mostrar()
{
	//tomo la edad 
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de Edad: " + edad);
	}
	else
	{
		alert("Es menor de Edad: " + edad);
	}

}//FIN DE LA FUNCIÓN