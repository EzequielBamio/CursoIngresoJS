/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con pami mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	Ezequiel Bamio

*/
function mostrar()
{
	//declarar variables
	let nombre;
	let obraSocial;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let mujerPamiMasJoven;
	let temperaturaMujerPamiMasJoven;
	let nombreMujerPamiMasJoven;
	let porcentajePersonas;
	let precioFinalConDescuento;
	let viajeTotalSinDescuento;

	let contadorPersonas;
	let contadorPersonasPami;
	let contadorPersonasOsde60
	contadorPersonasOsde60 = 0;
	contadorPersonasPami = 0;
	contadorPersonas = 0;

	let banderaPersonaOsde60;
	banderaPersonaOsde60 = false;

	let respuesta;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ERROR: Reingrese su nombre");
		}

		obraSocial = prompt("Ingrese su obra social. Pami, Osde, Otra");
		while(isNaN(obraSocial) == false || obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otra")
		{
			obraSocial = prompt("ERROR: Reingrese su obra social. Pami, Osde, Otra");
		}

		edad = prompt("Ingrese su edad");
		while(isNaN(edad) == true || edad < 17)
		{
			edad = prompt("ERROR: Reingrese su edad");
		}
		edad = parseInt(edad);

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		while(isNaN(temperaturaCorporal) == true)
		{
			temperaturaCorporal = prompt("ERROR: Reingrese su temperatura corporal");
		}
		temperaturaCorporal = parseInt(temperaturaCorporal);

		sexo = prompt("Ingrese su sexo");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Reingrese su sexo");
		}

		switch(obraSocial)
		{
			case "pami":
				if(edad < mujerPamiMasJoven || contadorPersonasPami == 0) //B
				{
					if(sexo == "f" )
					{
						mujerPamiMasJoven = edad;
						temperaturaMujerPamiMasJoven = temperaturaCorporal;
						nombreMujerPamiMasJoven = nombre;
					}
				}
				contadorPersonasPami++;	
				break;
					case "osde":
						if(edad > 59 || banderaPersonaOsde60 == false) //A
						{
							contadorPersonasOsde60++;
							banderaPersonaOsde60 = true;
						}
						break;
		}

		contadorPersonas++;

		respuesta = prompt("Quiere seguir ingresando personas? si o no");
	}

	viajeTotalSinDescuento = contadorPersonas * 600; // C

	porcentajePersonas = 100 * contadorPersonasPami / contadorPersonas; //D

	//salida

	if(banderaPersonaOsde60 != false)
	{
		document.write("La cantidad de personas con la obra social OSDE de mas de 60 años es de: " + contadorPersonasOsde60 + "<br>");
	}else
	{
		document.write("<br>");
	}
	if(contadorPersonasPami != 0 && sexo == "f")
	{
		document.write("La mujer con la obra social pami mas joven es " + nombreMujerPamiMasJoven + " edad: " +  mujerPamiMasJoven + " teperatura: " + temperaturaMujerPamiMasJoven + "<br>");
	}else
	{
		document.write("<br>");
	}

	document.write("El viaje total sin descuento es " + viajeTotalSinDescuento + "<br>");

	if(porcentajePersonas > 49)
	{
		precioFinalConDescuento = viajeTotalSinDescuento * 0.75;
		document.write("Hay mas del 50% que pertenecen a pami, el precio final con descuento: " + precioFinalConDescuento + "<br>");
	}else
	{
		document.write("<br>");
	}


}//FIN
