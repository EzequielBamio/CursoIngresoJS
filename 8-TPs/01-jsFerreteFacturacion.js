/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1, precio2, precio3, sumaTotal;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = precio1 + precio2 + precio3;

    alert(sumaTotal);

	
}
function Promedio () 
{
	let precio1, precio2, precio3, promedio;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) /3;

    alert(promedio);
}
function PrecioFinal () 
{
	let precio1, precio2, precio3, suma, precioFinal;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3
    precioFinal = suma + (suma * 21 / 100);

    alert(precioFinal);
}