/*Al ingresar una edad debemos informar solo si la persona es mayor de edad


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
		alert("Es mayor de Edad");
	}
	

}//FIN DE LA FUNCIÓN