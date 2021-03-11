/*
validación :
pedir el ingreso de 10 mascotas 
validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
*/
function probarEjercicio()
{
	//declarar variables
	let tipo;
	let raza;
	let edad;
	let nombre;
	let nombreTipoMasViejoPerro;
	let edadTipoMasViejoPerro;
	let nombreTipoMasViejoGato;
	let edadTipoMasViejoGato;
	let nombreTipoMasViejoPajaro;
	let edadTipoMasViejoPajaro;
	let nombreTipoMasViejoOtros;
	let edadTipoMasViejoOtros;
	let razaGatosConMasAnimales;
	let promedioEdadRaza;
	let edadRazaGatosConMasAnimales;
	let contadorMascosta;
	let contadorSiames;
	let contadorTurco;
	let contadorPeterbald;
	let contadorGenerico;
	let acumuladorSiames;
	let acumuladorTurco;
	let acumuladorPeterbald;
	let acumuladorGenerico;

	let banderaTipoMasViejoPerro;
	let banderaTipoMasViejoGato;
	let banderaTipoMasViejoPajaro;
	let banderaTipoMasViejoOtros;
	banderaTipoMasViejoPerro = false;
	banderaTipoMasViejoGato = false;
	banderaTipoMasViejoPajaro = false;
	banderaTipoMasViejoOtros = false;
	contadorMascosta = 0;
	contadorSiames = 0;
	contadorTurco = 0;
	contadorPeterbald = 0;
	contadorGenerico = 0;
	acumuladorSiames = 0;
	acumuladorTurco = 0;
	acumuladorPeterbald = 0;
	acumuladorGenerico = 0;

	//creamos un bucle de 10 ingresos de mascotas
	//validar: tipo, raza, edad, nombre
	while(contadorMascosta < 10)
	{
		tipo = prompt("Ingrese su mascota. (gato , perro , pajaro y otros)")
		while(isNaN(tipo) == false || tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otros")
		{
			tipo = prompt("ERROR Reingrese su mascota. (gato , perro , pajaro y otros)")
		}
		nombre = prompt("Ingrese el nombre de su mascota.")
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ERROR: Reingrese el nombre de su mascota.")
		}
		switch(tipo)
		{
			case "perro":
				raza = prompt("Ingrese la raza de su perro (pastor, toy, callejero)")
				while(isNaN(raza) == false || raza != "pastor" && raza != "toy" && raza != "callejero")
				{
				raza = prompt("ERROR Reingrese la raza de su perro. (pastor, toy, callejero)")
				}
				edad = prompt("Ingrese la edad de su mascota");
				while(isNaN(edad) == true || edad < 1 && edad > 20)
				{
				edad = prompt("ERROR: Reingrese la edad de su mascota");
				}
				break;
			case "gato":
				raza = prompt("Ingrese la raza de su gato (siamés, turco, Peterbald , generico)")
				while(isNaN(raza) == false || raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico")
				{
				raza = prompt("ERROR Reingrese la raza de su gato. (siamés, turco, Peterbald , generico)")
				}
				edad = prompt("Ingrese la edad de su mascota");
				while(isNaN(edad) == true || edad < 1 && edad > 20)
				{
				edad = prompt("ERROR: Reingrese la edad de su mascota");
				}
				break;
			case "pajaro":
				raza = prompt("Ingrese la raza de su pajaro.")
				while(isNaN(raza) == false)
				{
				raza = prompt("ERROR Reingrese la raza de su pajaro.")
				}
				edad = prompt("Ingrese la edad de su pajaro");
				while(isNaN(edad) == true || edad < 1 && edad > 50)
				{
				edad = prompt("ERROR: Reingrese la edad de su pajaro");
				}
				break;
			case "otros":
				raza = prompt("Ingrese la raza de su mascota.")
				while(isNaN(raza) == false)
				{
				raza = prompt("ERROR Reingrese la raza de su mascota.")
				}
				edad = prompt("Ingrese la edad de su mascota");
				while(isNaN(edad) == true || edad < 1 && edad > 100)
				{
				edad = prompt("ERROR: Reingrese la edad de su mascota");
				}
				break;
		}
		edad = parseInt(edad);

		switch(tipo)
		{
			case "perro":
				if(edad > edadTipoMasViejoPerro || banderaTipoMasViejoPerro == false)
				{
					nombreTipoMasViejoPerro = nombre;
					edadTipoMasViejoPerro = edad;

					banderaTipoMasViejoPerro = true;
				}
				break;
			case "gato":
				if(edad > edadTipoMasViejoGato || banderaTipoMasViejoGato == false)
				{
					nombreTipoMasViejoGato = nombre;
					edadTipoMasViejoGato = edad;

					banderaTipoMasViejoGato = true;
				}
				switch(raza)
				{
					case "siames":
						contadorSiames++;
						acumuladorSiames += edad;
						break;
					case "turco":
						contadorTurco++;
						acumuladorTurco += edad;
						break;
					case "peterbald":
						contadorPeterbald++;
						acumuladorPeterbald += edad;

						break;
					case "generico":
						contadorGenerico++;
						acumuladorGenerico += edad;
						break;
				}
				break;
			case "pajaro":
				if(edad > edadTipoMasViejoPajaro || banderaTipoMasViejoPajaro == false)
				{
					nombreTipoMasViejoPajaro = nombre;
					edadTipoMasViejoPajaro = edad;

					banderaTipoMasViejoPajaro = true;
				}
				break;
			case "otros":
				if(edad > edadTipoMasViejoOtros || banderaTipoMasViejoOtros == false)
				{
					nombreTipoMasViejoOtros = nombre;
					edadTipoMasViejoOtros = edad;

					banderaTipoMasViejoOtros = true;
				}
				break;
		}

		contadorMascosta++
	}	

	if(contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico)
	{
		razaGatosConMasAnimales = "Siames";
		edadRazaGatosConMasAnimales = acumuladorSiames;
		contadorRazaGatosConMasAnimales = contadorSiames;
	}else
	{
		if(contadorTurco > contadorSiames && contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico)
		{
			razaGatosConMasAnimales = "Turco";
			edadRazaGatosConMasAnimales = acumuladorTurco;
			contadorRazaGatosConMasAnimales = contadorTurco;
		}else
		{
			if(contadorPeterbald > contadorSiames && contadorPeterbald > contadorTurco && contadorPeterbald > contadorGenerico)
			{
				razaGatosConMasAnimales = "Peterbald";
				edadRazaGatosConMasAnimales = acumuladorPeterbald;
				contadorRazaGatosConMasAnimales = contadorPeterbald;

			}else
			{
				razaGatosConMasAnimales = "Generico";
				edadRazaGatosConMasAnimales = acumuladorGenerico;
				contadorRazaGatosConMasAnimales = contadorGenerico;
			}	
		}
	}

	promedioEdadRaza = edadRazaGatosConMasAnimales / contadorRazaGatosConMasAnimales;

	//salida
	if(banderaTipoMasViejoPerro != false)
	{
		document.write(nombreTipoMasViejoPerro + " " + edadTipoMasViejoPerro + "<br>");
	}else
	{
		document.write("<br>");
	}
	if(banderaTipoMasViejoGato != false)
	{
		document.write(nombreTipoMasViejoGato + " " + edadTipoMasViejoGato + "<br>");
	}else
	{
		document.write("<br>");
	}
	if(banderaTipoMasViejoPajaro != false)
	{
		document.write(nombreTipoMasViejoPajaro + " " + edadTipoMasViejoPajaro + "<br>");
	}else
	{
		document.write("<br>");
	}
	if(banderaTipoMasViejoOtros != false)
	{
		document.write(nombreTipoMasViejoOtros + " " + edadTipoMasViejoOtros + "<br>");
	}else
	{
		document.write("<br>");
	}
	document.write("La raza de gatos con mas animales es: " + razaGatosConMasAnimales + " y el promedio de edad de esta raza es " + promedioEdadRaza + "<br>")

}

