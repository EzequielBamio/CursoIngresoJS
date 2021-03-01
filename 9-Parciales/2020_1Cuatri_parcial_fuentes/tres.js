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



 */
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
