/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.

		Ezequiel Bamio
*/

function mostrar()
{

	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	

	if(edad < 13 || edad > 17)
	{
		alert("No es un adolecente");

	}

}//FIN DE LA FUNCIÓN