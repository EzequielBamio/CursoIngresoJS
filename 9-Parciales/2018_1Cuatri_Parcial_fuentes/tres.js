function mostrar()
{
    let precio;
    let porcentaje;
    let descuento;
    let precioFinal;

    precio = prompt("Ingrese el Precio: ");
    porcentaje = prompt("Ingrese el porcentaje");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    descuento = precio * porcentaje/100;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
