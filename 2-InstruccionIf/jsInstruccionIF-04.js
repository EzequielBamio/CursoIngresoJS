/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .


Ezequiel Bamio


*/

function mostrar()
{
	//tomo la edad  
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("La persona es adolecente, tiene: " + edad);
	}


}//FIN DE LA FUNCIÓN