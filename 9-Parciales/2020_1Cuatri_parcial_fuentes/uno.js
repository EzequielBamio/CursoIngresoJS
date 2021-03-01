 /*
 Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 

 Ezequiel Bamio


*/

function mostrar()
{
	//Declaromos las variables
	let cantidadUnidades;
	let fabricanteProducto;
	let marcaProducto;
	let precioProducto;
	let tipoProducto;
	let cantidadUnidadesAlcohol;
	let fabricanteAlcoholBarato;
	let precioAlcoholBarato;
	let promedioCompra;

	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorProductos;

	//Definimos Variables
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorProductos = 0;


	//flag
	let banderaAlcohol;
	banderaAlcohol = false;




	//Carga de 5 productos
	while(contadorProductos < 1)
	{	
		//validar el tipo: "barbijo" "jabon" "alcohol", precio entre 100 y 300, la cantidad tiene que ser mayor a 0 y menor a 1000, marca y fabricante
		tipoProducto = prompt("Ingrese el producto");
		while(isNaN(tipoProducto) == false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error: Reingrese el producto");
		}
		precioProducto = prompt("Ingrese el precio");
		while(isNaN(precioProducto) == true || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt("Error: Reingrese el precio");
		}
		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		while(isNaN(cantidadUnidades) == true || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Error: Reingrese la cantidad de unidades");
		}
		marcaProducto = prompt("Ingrese la marca");
		while(isNaN(marcaProducto) == false)
		{
			marcaProducto = prompt("Error: Reingrese la marca");
		}
		fabricanteProducto = prompt("Ingrese el fabricante");
		while(isNaN(fabricanteProducto) == false)
		{
			fabricanteProducto = prompt("Error: Reingrese el fabricante");
		}
		cantidadUnidades = parseInt(cantidadUnidades);
		precioProducto = parseInt(precioProducto);


		switch(tipoProducto)
		{
			case "alcohol":
					acumuladorAlcohol += cantidadUnidades;

					if(contadorAlcohol == 0)
					{
						precioAlcoholBarato = precioProducto;
						cantidadUnidadesAlcohol = cantidadUnidades;
						fabricanteAlcoholBarato = fabricanteProducto;
					}	

				contadorAlcohol++;	
			break;
			case "barbijo":
					acumuladorBarbijo += cantidadUnidades;
					contadorBarbijo++;
			break;
			case "jabon":
					acumuladorJabon += cantidadUnidades;
					contadorJabon++;
			break;
		}

		contadorProductos++
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		tipoMasUnidades = "Alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;

	}else
	{
		if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			tipoMasUnidades = "Barbijo";
			promedioCompra = acumuladorBarbijo / contadorBarbijo;

		}else
		{
			tipoMasUnidades = "Jabon";
			promedioCompra = acumuladorJabon / contadorJabon;
		}

	}

	//salida
	if(contadorAlcohol != 0)
	{
		document.write("El alcohol mas barato es: " + fabricanteAlcoholBarato + " con un costo de $"+ precioAlcoholBarato + " y la cantidad de unidades es: " + cantidadUnidadesAlcohol+"<br>");
	}else
	{
		document.write("No sean ingresado alcoholes" + "<br>");
	}
	document.write("El tipo con mas unidades es " + tipoMasUnidades + " y el promedio de compra es " + promedioCompra + "<br>");
	document.write("El total de unidades de jabon es " + acumuladorJabon + "<br>");

}
