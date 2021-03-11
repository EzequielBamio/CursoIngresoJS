/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos

Ezequiel Bamio
*/
function mostrar()
{
	let i;
	let nombreProducto;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let categoria;
	let fabricante;
	let sumaTotalProducto;
	let promedioCantidadProductoAlcohol;
	let promedioCantidadProductoIA;
	let promedioCantidadProductoQuat;
	let masCaroProductos;
	let categoriaMasCaroProductos;
	let fabricanteMasCaroProductos;

	let acumuladorCantidadAlcohol;
	let acumuladorCantidadIAC;
	let acumuladorCantidadQuat;
	let acumuladorBactericida;
	let acumuladorDesinfectante;
	let acumuladorDetergente;
	let acumuladorUnidadesMenos200;
	let contadorIAC;
	let contadorQuat;
	let contadorAlcohol;
	acumuladorUnidadesMenos200 = 0;
	acumuladorCantidadIAC = 0;
	acumuladorCantidadQuat = 0;
	acumuladorBactericida = 0;
	acumuladorDesinfectante = 0;
	acumuladorDetergente = 0;
	contadorIAC = 0;
	contadorQuat = 0;
	contadorAlcohol = 0;
	acumuladorCantidadAlcohol = 0;

	let banderaMasCaroProductos;
	banderaMasCaroProductos = 0;


	for(i = 0; i < 5; i++)
	{
		nombreProducto = prompt("Ingrese el nombre del producto.");
   		 while (isNaN(nombreProducto) == false) 
		{
        nombreProducto = prompt("ERROR: Reingrese el nombre del producto.");
    	} 

		tipoProducto = prompt("Ingrese el tipo de producto. ALCOHOL, IAC o QUAT");
   		while (isNaN(tipoProducto) == false ||tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat")
		{
		tipoProducto = prompt("ERROR: Reingrese el tipo producto. ALCOHOL, IAC o QUAT");
		}

		precio = prompt("Ingrese el precio")
    	while (isNaN(precio) == true || precio < 100 || precio > 300) 
		{
		precio = prompt("ERROR: Reingrese el precio.");
   		}
		precio = parseInt(precio);

		cantidadUnidades = prompt("Ingrese la Cantidad Unidades")
    	while (isNaN(cantidadUnidades) == true || cantidadUnidades < 0 || cantidadUnidades > 1000) 
		{
		cantidadUnidades = prompt("ERROR: Reingrese la Cantidad Unidades.");
   		}
		cantidadUnidades = parseInt(cantidadUnidades);

		categoria = prompt("Ingrese la categoria. desinfectante, bactericida o detergente");
   		while (isNaN(categoria) == false ||categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente") 
		{
		categoria = prompt("ERROR: Reingrese la Categoria. desinfectante, bactericida, detergente");
		} 
		
		fabricante = prompt("Ingrese la fabricante");
   		while (isNaN(fabricante) == false ) 
		{
		fabricante = prompt("ERROR: Reingrese la fabricante");
		} 

		switch(tipoProducto)
		{
			case "alcohol":
				acumuladorCantidadAlcohol += cantidadUnidades;
				contadorAlcohol++;
				break;
				case "iac":
					acumuladorCantidadIAC += cantidadUnidades;
					contadorIAC++;
					break;
					case "quat":
						acumuladorCantidadQuat += cantidadUnidades;
						contadorQuat++;
						break;
		}
		switch(categoria)
		{
			case "bactericida":
				acumuladorBactericida += cantidadUnidades;
				break;
				case "desinfectante":
					acumuladorDesinfectante += cantidadUnidades;
					break;
					case "detergente":
						if(precio < 201)
						{
							acumuladorUnidadesMenos200 += cantidadUnidades;
						}
						acumuladorDetergente += cantidadUnidades;
						break;
		}
		
		if(precio > masCaroProductos || banderaMasCaroProductos == false)
		{
			masCaroProductos = precio;
			fabricanteMasCaroProductos = fabricante;
			categoriaMasCaroProductos =  categoria;

			banderaMasCaroProductos = true;
		}
	}

	sumaTotalProducto = contadorAlcohol + contadorIAC + contadorQuat;

	promedioCantidadProductoAlcohol = acumuladorCantidadAlcohol / sumaTotalProducto;
	promedioCantidadProductoIA = acumuladorCantidadIAC / sumaTotalProducto;
	promedioCantidadProductoQuat = acumuladorCantidadQuat / sumaTotalProducto;

	if(acumuladorBactericida > acumuladorDesinfectante && acumuladorBactericida > acumuladorDetergente)
	{
		categoriaConMasUnidades = "Bactericida";
	}else
	{
		if(acumuladorDesinfectante > acumuladorDetergente)
		{
			categoriaConMasUnidades = "Desinfectante";
		}else
		{
			categoriaConMasUnidades = "Detergente"
		}
	}

	document.write("El promedio de cantidad por tipo de producto Alcohol es: " + promedioCantidadProductoAlcohol + "<br>");
	document.write("El promedio de cantidad por tipo de producto IAC es: " + promedioCantidadProductoIA + "<br>");
	document.write("El promedio de cantidad por tipo de producto QUAT es: " + promedioCantidadProductoQuat + "<br>");
	document.write("La categoria con mas cantidad de unidades es: " + categoriaConMasUnidades + "<br>");
	document.write("Detergente tiene en total " + acumuladorUnidadesMenos200 + " Unidades" + "<br>");
	document.write("El mas caro de los productos es: " + categoriaMasCaroProductos + " " + fabricanteMasCaroProductos + " $" + masCaroProductos) + "<br>";
}
