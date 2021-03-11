/*Enunciado 3:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde): 
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar()
{
	//declarar variables
	let nombre;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let cantidadPersonasViudo60;
	let mujerSolteraMasJoven;
	let viajeTotalSinDescuento;
	let descuento;
	let precioFinalConDescuento;
	let nombreMujerSolteraMasJoven;

	viajeTotalSinDescuento = 600;

	let banderaMujerSolteraMasJoven;
	banderaMujerSolteraMasJoven = false;

	let contadorCantidadPersonasViudo;
	contadorCantidadPersonasViudo = 0;

	let respuesta;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre))
		{
			nombre = prompt("ERROR: Reingrese su nombre");
		}

		estadoCivil = prompt("Ingrese su estado civil");
		while(isNaN(estadoCivil) || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR: Reingrese su estado civil");
		}

		edad = prompt("Ingrese su edad");
		while(isNaN(edad) || edad < 17)
		{
			edad = prompt("ERROR: Reingrese su edad");
		}
		edad = parseInt(edad);

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = prompt("ERROR: Reingrese su temperatura corporal");
		}
		temperaturaCorporal = parseInt(temperaturaCorporal);

		sexo = prompt("Ingrese su sexo");
		while(isNaN(sexo) || sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Reingrese su sexo");
		}

		switch(estadoCivil)
		{
			case "casado":
				break;
				case "soltero":
					if(sexo == "f" || banderaMujerSolteraMasJoven == false)
					{
						if(edad < mujerSolteraMasJoven)
						{
							mujerSolteraMasJoven = edad;
							nombreMujerSolteraMasJoven = nombre;
						}
					}
					break;
					case "viudo":
						if(edad > 59)
						{
							contadorCantidadPersonasViudo++;
						}
						break;
		}
		contadorPersonas++;
		if(edad > 59)
		{
			contadorPeronasMayores60++;
		}

	respuesta = prompt("Quiere seguir ingresando personas? si o no")
	}

	viajeTotalSinDescuento = contadorPersonas * 600;

	porcentajePasajeros = 100 * contadorPeronasMayores60 / contadorPersonas;
	if(porcentajePasajeros > 49)
	{
		precioFinalConDescuento = viajeTotalSinDescuento * 0.75;
	}

	

	//NOTA:el precio por pasajero es de $600.
	//Se debe informar (solo si corresponde):
	//a) La cantidad de personas con estado "viudo" de mas de 60 años.
	//b) el nombre y edad de la mujer soltera mas joven.
	//c) cuanto sale el viaje total sin descuento.
	//d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	if(contadorCantidadPersonasViudo != 0)
	{
		console.log("La cantidad de personas viudas de mas de 60 años es " + contadorCantidadPersonasViudo);
	}else
	{
		console.log("No hay personas viudas de mas de 60 años");
	}
	if(banderaMujerSolteraMasJoven != false)
	{
		console.log("La mujer soltera mas joven es " + nombreMujerSolteraMasJoven +" " +  mujerSolteraMasJoven);
	}else
	{
		console.log("No se ingresaron mujeres solteras");
	}
	console.log("El viaje total sin descuento es " + viajeTotalSinDescuento);
	if(contadorPeronasMayores60 != 0)
	{
		console.log("Hay mas del 50% de pasajeros con mas de 60 años asi que el precio final con descuento: " + precioFinalConDescuento);
	}else
	{
		console.log("No se ingresaron pasajeros con mas de 60 años");
	}
}

 








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
*/
