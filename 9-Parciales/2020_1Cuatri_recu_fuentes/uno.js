/*Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300), 
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos 


*/
function mostrar()
{
	let i;
	let nombreProducto;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let sumaTotalProducto;
	let promedioCantidadProductoAlcohol;
	let promedioCantidadProductoIA;
	let promedioCantidadProductoQuat;
	let tipoInflamableConMasUnidades;
	let marcaMasCaroProductos;
	let tipoMasCaroProductos
	let masCaroProductos;

	let acumuladorCantidadAlcohol;
	let acumuladorCantidadQuat;
	let acumuladorCantidadIA;
	let acumuladorExplosivo;
	let acumuladorCombustible;
	let acumuladorIgnifugo;
	let acumuladorUnidadesMenos200;
	let contadorAlcohol;
	let contadorIA;
	let contadorQuat;
	acumuladorUnidadesMenos200 = 0;
	acumuladorExplosivo = 0;
	acumuladorCombustible = 0;
	acumuladorIgnifugo = 0;
	acumuladorCantidadAlcohol = 0;
	acumuladorCantidadQuat = 0;
	acumuladorCantidadIA = 0;
	contadorAlcohol = 0;
	contadorIA = 0;
	contadorQuat = 0;

	let banderaMasCaroProductos;
	banderaMasCaroProductos = false;


	for(i = 0; i < 5; i++)
	{
		nombreProducto = prompt("Ingrese el nombre del producto.");
   		 while (isNaN(nombreProducto) == false) 
		{
        nombreProducto = prompt("ERROR: Reingrese el nombre del producto.");
    	} 

		tipoProducto = prompt("Ingrese el tipo de producto. ALCOHOL, IA o QUAT");
   		while (isNaN(tipoProducto) == false ||tipoProducto != "alcohol" && tipoProducto != "ia" && tipoProducto != "quat")
		{
		tipoProducto = prompt("ERROR: Reingrese el tipo producto. ALCOHOL, IA o QUAT");
		}

		precio = prompt("Ingrese el precio")
    	while (isNaN(precio) == true || precio < 100 || precio > 300) 
		{
		precio = prompt("ERROR: Reingrese el precio.");
   		}
		precio = parseInt(precio);

		cantidadUnidades = prompt("Ingrese el Cantidad Unidades")
    	while (isNaN(cantidadUnidades) == true || cantidadUnidades < 0 || cantidadUnidades > 1000) 
		{
		cantidadUnidades = prompt("ERROR: Reingrese el Cantidad Unidades.");
   		}
		cantidadUnidades = parseInt(cantidadUnidades);

		tipoInflamable = prompt("Ingrese el tipo de inflamable. ignifugo, combustible o explosivo");
   		while (isNaN(tipoInflamable) == false ||tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") 
		{
		tipoInflamable = prompt("ERROR: Reingrese el tipo de inflamable. ignifugo, combustible o explosivo");
		} 
		
		marca = prompt("Ingrese la marca");
   		while (isNaN(marca) == false ) 
		{
		marca = prompt("ERROR: Reingrese la marca");
		} 

		switch(tipoProducto)
		{
			case "alcohol":
				acumuladorCantidadAlcohol += cantidadUnidades;
				contadorAlcohol++;
				break;
				case "ia":
					if(precio < 201)
					{
						acumuladorUnidadesMenos200 += cantidadUnidades;
					}
					acumuladorCantidadIA += cantidadUnidades;
					contadorIA++;
					break;
					case "quat":
						acumuladorCantidadQuat += cantidadUnidades;
						contadorQuat++;
						break;
		}

		switch(tipoInflamable)
		{
			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
				break;
				case "combustible":
					acumuladorCombustible += cantidadUnidades;
					break;
					case "explosivo":
						acumuladorExplosivo += cantidadUnidades;
						break;
		}

		if(precio > masCaroProductos || banderaMasCaroProductos == false)
		{
			masCaroProductos = precio;
			marcaMasCaroProductos = marca;
			tipoMasCaroProductos =  tipoProducto;

			banderaMasCaroProductos = true;
		}

	}
	//a) El promedio de cantidad por tipo de producto
	sumaTotalProducto = contadorAlcohol + contadorIA + contadorQuat;

	promedioCantidadProductoAlcohol = acumuladorCantidadAlcohol / sumaTotalProducto;
	promedioCantidadProductoIA = acumuladorCantidadIA / sumaTotalProducto;
	promedioCantidadProductoQuat = acumuladorCantidadQuat / sumaTotalProducto;

	if(acumuladorIgnifugo > acumuladorExplosivo && acumuladorIgnifugo > acumuladorCombustible)
	{
		tipoInflamableConMasUnidades = "Ignifugo";
	}else
	{
		if(acumuladorExplosivo > acumuladorCombustible)
		{
			tipoInflamableConMasUnidades = "Explosivo";
		}else
		{
			tipoInflamableConMasUnidades = "Combustible"
		}
	}

	console.log("El promedio de cantidad por tipo de producto Alcohol es: " + promedioCantidadProductoAlcohol);
	console.log("El promedio de cantidad por tipo de producto IA es: " + promedioCantidadProductoIA);
	console.log("El promedio de cantidad por tipo de producto QUAT es: " + promedioCantidadProductoQuat);
	console.log("El tipo de inflamable con mas cantidad de unidades es: " + tipoInflamableConMasUnidades);
	console.log("IA tiene en total " + acumuladorUnidadesMenos200 + " Unidades");
	console.log("El mas caro de los productos es: " + tipoMasCaroProductos + " " + marcaMasCaroProductos + " $" + masCaroProductos);

}








































/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

TEST:

Viaje:
Solicitante1: Carlos, 22, m, casado, 37
Solicitante2: Ezequiel, 19, m, soltero, 36
Solicitante3: Candela, 18, f, soltero, 39
Solicitante4: Agustin, 23, m, soltero, 37
Solicitante5: Oscar, 70, m, viudo, 39

A. Candela 39
B. 1
C. 3
D. 1
E. 21 

	Ezequiel Bamio

function mostrar()
{
	//Declaramos variables
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let personaConMasTemperatura;
	let promedioEdad;
	let nombrePersonaTemperatura;
	let respuesta;

	let acumuladorEdadHombreSoltero;
	let contadorMayorViudo;
	let contadorHombreSolteroViudo;
	let contadorTerceraEdad;
	let contadorEdadHombreSoltero

	acumuladorEdadHombreSoltero = 0;
	contadorMayorViudo = 0;
	contadorHombreSolteroViudo = 0;
	contadorTerceraEdad = 0;
	contadorEdadHombreSoltero = 0;

	//flags
	banderaTemperatura = false;

	respuesta = 'si';

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ERROR: Ingrese un nombre valido");
		}
		edad = prompt("Ingrese su edad");
		while(isNaN(edad) == true)
		{
			edad = prompt("ERROR: Ingrese una edad valida");
		}
		sexo = prompt("Ingrese su Sexo. f / m");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Ingrese sexo valido");
		}
		estadoCivil = prompt("Ingrese su Estado Civil");
		while(isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR: Ingrese un estado civil valido");
		}
		temperaturaCorporal = prompt("Ingrese su Temperatura Corporal");
		while(isNaN(temperaturaCorporal) == true)
		{
			temperaturaCorporal = prompt("ERROR: Ingrese una Temperatura Corporal valida");
		}

		edad = parseInt(edad);

		if(temperaturaCorporal > personaConMasTemperatura || banderaTemperatura == false)
		{
			personaConMasTemperatura = temperaturaCorporal;
			nombrePersonaTemperatura = nombre;
			banderaTemperatura = true;
		}

		switch(estadoCivil)
		{
			case "viudo":
				if(edad > 17)
				{
					contadorMayorViudo++;
				}
			break;
			case "casado":
				if(sexo == "m")
				{
					contadorHombreSolteroViudo++;
				}
			break;
			case "soltero":
				if(sexo == "m")
				{
					acumuladorEdadHombreSoltero += edad;
					contadorEdadHombreSoltero++;
				}
			break;
		}
		
		if(edad > 59 && temperaturaCorporal > 38)
		{
			contadorTerceraEdad++;
		}

		respuesta = prompt("Quiere seguir ingresando solicitantes? si/no")
	}

	promedioEdad = acumuladorEdadHombreSoltero / contadorEdadHombreSoltero;

	//salida
	document.write("La temperatura mayor de " + nombrePersonaTemperatura + " es de " + personaConMasTemperatura + "<br>");
	document.write("La cantidad de mayores de 18 que estan viudos es " + contadorMayorViudo + "<br>");
	document.write("La cantidad de hombres que estan solteros o viudos es " + contadorHombreSolteroViudo + "<br>");
	document.write("Las personas de tercera edad, que tienen una temperatura mas de 38 es " + contadorTerceraEdad + "<br>");
	if(contadorEdadHombreSoltero != 0)
	{
		document.write("El promedio de edad de hombres solteros es de " + promedioEdad + "<br>");
	}else
	{
		document.write("No sean ingresado hombres solteros <br>");
	}
}
*/
