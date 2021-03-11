/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	nombre = document.getElementById("txtIdNombre").value;

	alert("Usted se llama " + nombre + " y tiene " + edad);
}

