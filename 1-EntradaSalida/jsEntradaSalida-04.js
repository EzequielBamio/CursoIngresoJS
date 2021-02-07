/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let descripcion;
	let precio;
	let aumento;
	let precioFinal;

	descripcion = prompt("Ingrese el producto: ");
	precio = document.getElementById("txtIdNombre").value;
	precio = parseFloat(precio);

	aumento = precio * 0.30;
	precioFinal = precio + aumento;

	alert("El producto: " + descripcion + " sale $"+ precio + " y el Total a pagar con el 30% aumentado: " + precioFinal);




	/*
	let nombre;

	nombre = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombre;
	*/
}


