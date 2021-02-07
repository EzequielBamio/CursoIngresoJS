/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

	Ezequiel Bamio
*/
function mostrarAumento()
{
	let nombreProducto;
	let precio;
	let porcentaje;
	let descuento;
	let precioFinal;


	nombreProducto = prompt("Ingrese el producto que desea: ");
	precio = prompt("Ingrese el precio");
	porcentaje = prompt("Ingrese el descuento: %");

	precio = parseFloat(precio);
	
	descuento = precio * porcentaje/100;

	precioFinal = precio - descuento;

	alert("Usted compro " + nombreProducto + " con " + porcentaje + "% de descuento, el precio final es " + precioFinal);






	/*
	let importe;
	let descuento;
	let importeTotal;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	//calculando el descuento
	
	descuento = importe * 25 /100;
	//descuento = importe * 0.25;
	//descuento = importe - (importe * 0.25);
	//importeTotal = importe * 0.75;



	//calcula el descuento
	importeTotal = importe - descuento;
	//Mostramos el importe total en la caja de texto
	document.getElementById("txtIdResultado").value = importeTotal;*/
}
