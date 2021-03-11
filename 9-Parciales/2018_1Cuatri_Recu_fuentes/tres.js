/*
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

    Ezequiel Bamio

*/

function mostrar()
{
    let precio;
    let porcentaje;
    let precioFinal;
    let descuento;

    precio = prompt("Ingresa el precio: ");
    porcentaje = prompt("Ingresa el porcentaje: ");

    precio = parseFloat(precio);

    descuento = precio * porcentaje /100;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
