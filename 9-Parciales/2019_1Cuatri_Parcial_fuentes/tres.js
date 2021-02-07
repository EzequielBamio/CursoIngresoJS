function mostrar()
{
    let precio;
    let porcentaje;
    let descuento;
    let precioFinal;

    precio = prompt("Ingrese el precio: ");
    porcentaje = prompt("Ingrese el porcentaje");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    descuento = precio * porcentaje/100;
    precioFinal = precio - descuento;

    alert("El precio es: " + precio + " y el porcentaje es " + porcentaje + " el precio final es: " + precioFinal);

}
