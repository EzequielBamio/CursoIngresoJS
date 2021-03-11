
/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

function mostrar()
{
    let i;
	let tipoProducto;
    let precio;
    let cantidadUnidades;
    let marca;
    let fabricante;
    let jabonMasCaro;
    let cantidadJabonMasCaro;
    let fabricanteJabonMasCaro;
    let productoConMasUnidades;
    let promedioCompraProductoConMasUnidades;
    let sumaTotalProductos;

    let contadorAlcohol;
    let contadorJabon;
    let contadorBarbijo;
    let acumuladorJabonMasCaro;
    let acumuladorUnidadesBarbijos;
    acumuladorUnidadesBarbijos = 0;
    acumuladorJabonMasCaro = 0;
    contadorAlcohol = 0;
    contadorJabon = 0;
    contadorBarbijo = 0;

    for(i = 0; i < 5 ; i++)
    {
        tipoProducto = prompt("Ingrese el producto");
        while(isNaN(tipoProducto) == false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
        {
            tipoProducto = prompt("ERROR: Reingrese el producto");
        }

        precio = prompt("Ingrese el precio");
        while(isNaN(precio) == true)
        {
            precio = prompt("ERROR: Reingrese el precio");
        }
        precio = parseInt(precio);

        cantidadUnidades = prompt("Ingrese el cantidad");
        while(isNaN(cantidadUnidades) == true)
        {
            cantidadUnidades = prompt("ERROR: Reingrese el cantidad");
        }
        cantidadUnidades = parseInt(cantidadUnidades);

        marca = prompt("Ingrese el marca");
        while(isNaN(marca) == false)
        {
            marca = prompt("ERROR: Reingrese el marca");
        }

        fabricante = prompt("Ingrese el fabricante");
        while(isNaN(fabricante) == false)
        {
            fabricante = prompt("ERROR: Reingrese el fabricante");
        }

        switch(tipoProducto)
        {
            case "alcohol":
                contadorAlcohol++;
                acumuladorUnidadesAlcohol += cantidadUnidades;
                break;
                case "barbijo":
                    contadorBarbijo++;
                    acumuladorUnidadesBarbijos += cantidadUnidades;
                    break;
                    case "jabon":
                        if(precio > jabonMasCaro)
                        {
                            acumuladorJabonMasCaro += cantidadUnidades;
                        }
                        acumuladorUnidadesJabon += cantidadUnidades;
                        contadorJabon++;
                        break;
        }

    }
    sumaTotalProductos = contadorAlcohol + contadorBarbijo + contadorJabon;
    if(acumuladorUnidadesAlcohol > acumuladorUnidadesJabon && acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijos)
    {
        promedioCompraProductoConMasUnidades = acumuladorUnidadesAlcohol / sumaTotalProductos;
        productoConMasUnidades = "Alcohol";
    }else
    {
        if(acumuladorUnidadesJabon > acumuladorUnidadesBarbijos)
        {
            promedioCompraProductoConMasUnidades = acumuladorUnidadesJabon / sumaTotalProductos; 
            productoConMasUnidades = "Jabon";
        }else
        {
            promedioCompraProductoConMasUnidades = acumuladorUnidadesBarbijos / sumaTotalProductos; 
            productoConMasUnidades = "Barbijos";
        }
    }


    console.log("El mas caro de los jabones es " + jabonMasCaro + " la cantidad de unidades es: " + cantidadJabonMasCaro + " fabricante:" + fabricanteJabonMasCaro);
    console.log("El tipo de producto con mas unidades es: " + productoConMasUnidades + " y el promedio por compra es " + promedioCompraProductoConMasUnidades);
    console.log("La cantidad de barbijos que se compraron en total es " + acumuladorUnidadesBarbijos);
//Se debe Informar al usuario lo siguiente:
//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
//c) Cuántas unidades de Barbijos se compraron en total
}*/