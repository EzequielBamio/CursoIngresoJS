/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

	Ezequiel Bamio

*/
function mostrar()
{
	let nombreEmpleado;
	let edad;
	let sexoEmpleado;
	let puestoEmpleado;
	let sueldoEmpleado;
	let sumaTotalCantidadEmpleados;
	let promedioSueldoProgramador;
	let promedioSueldoAnalista;
	let promedioSueldoQA;
	let sexoMayorSueldo;
	let sueldoSexoMayorSueldo;
	let nombreEmpleadoFemeninoMayorSueldo;
	let sueldoSexoMayorSueldoMasculino;
	let sueldoSexoMayorSueldoFemenino;
	let sueldoSexoMayorSueldoNoBinario;
	
	let acumuladorSueldoProgramador;
	let acumuladorSueldoAnalista;
	let acumuladorSueldoQA;
	let contadorAnalista;
	let contadorProgramador;
	let contadorQA;
	let contadorProgramadorNoBinario;

	let banderaFemenino;
	let banderaMasculino;
	banderaFemenino = false;
	banderaMasculino = false;	

	let respuesta;
	respuesta = "si";

	acumuladorSueldoProgramador = 0;
	acumuladorSueldoAnalista = 0;
	acumuladorSueldoQA = 0;
	contadorAnalista = 0;
	contadorProgramador = 0;
	contadorQA = 0;
	contadorProgramadorNoBinario = 0;

	while(respuesta == "si")
	{

		nombreEmpleado = prompt("Ingrese el nombre de su empleado");
		while(isNaN(nombreEmpleado) == false)
		{
			nombreEmpleado = prompt("ERROR: Reingrese el nombre de su empleado");
		}

		edad = prompt("Ingrese la edad de su empleado");
		while(isNaN(edad) == true)
		{
			edad = prompt("ERROR: Reingrese la edad de su empleado");
		}
		edad = parseInt(edad);

		sexoEmpleado = prompt("Ingrese el sexo de su empleado. femenino masculino nobinario");
		while(isNaN(sexoEmpleado) == false || sexoEmpleado != "femenino" && sexoEmpleado != "masculino" && sexoEmpleado != "nobinario")
		{
			sexoEmpleado = prompt("ERROR: Reingrese el sexo de su empleado. femenino masculino nobinario");
		}

		puestoEmpleado = prompt("Ingrese el puesto de su empleado. programador analista qa");
		while(isNaN(puestoEmpleado) == false || puestoEmpleado != "programador" && puestoEmpleado != "analista" && puestoEmpleado != "qa")
		{
			puestoEmpleado = prompt("ERROR: Reingrese el puestoEmpleado de su empleado. programador analista qa");
		}
		sueldoEmpleado = prompt("Ingrese la Sueldo de su empleado");
		while(isNaN(sueldoEmpleado) == true || sueldoEmpleado < 15000 || sueldoEmpleado > 70000)
		{
			sueldoEmpleado = prompt("ERROR: Reingrese la Sueldo de su empleado");
		}
		sueldoEmpleado = parseInt(sueldoEmpleado);

		switch(puestoEmpleado)
		{
			case "analista":
				acumuladorSueldoAnalista += sueldoEmpleado;
				contadorAnalista++;
				break;
				case "programador":
					if(sexoEmpleado == "nobinario" || contadorProgramador == 0)
					{
						if(sueldoEmpleado > 20000 && sueldoEmpleado < 55000)
						{
							contadorProgramadorNoBinario++;//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
						}
					}
					acumuladorSueldoProgramador += sueldoEmpleado;
					contadorProgramador++;
					break;
					case "qa":
						acumuladorSueldoQA += sueldoEmpleado;
						contadorQA++;
						break;
		}

		switch(sexoEmpleado)
		{
			case "femenino":
				if(sueldoEmpleado > sueldoSexoMayorSueldoFemenino || banderaFemenino == false)
				{
					sueldoSexoMayorSueldoFemenino = sueldoSexoMayorSueldo;
					banderaFemenino = true;
					nombreEmpleadoFemeninoMayorSueldo = nombre; 	//c) el nombre del empleado femenino con mas sueldo
				}
				break;
				case "masculino":
					if(sueldoEmpleado > sueldoSexoMayorSueldoMasculino || banderaMasculino == false)
					{
						sueldoSexoMayorSueldoMasculino = sueldoSexoMayorSueldo;
						banderaMasculino = true;
					}
					break;
					case "nobinario":
						if(sueldoEmpleado > sueldoSexoMayorSueldoNoBinario || contadorProgramadorNoBinario == 0)
						{
							sueldoSexoMayorSueldoNoBinario = sueldoSexoMayorSueldo;
						}
					
						contadorProgramadorNoBinario++;
						break;
		}
		respuesta = prompt("Quiere seguir ingresando empleados? si o no");
	}

	//a) promedio de sueldos para cada puesto
	sumaTotalCantidadEmpleados = contadorAnalista + contadorProgramador + contadorQA;
	//b) el sexo del que percibe el mayor sueldo
	if(sueldoSexoMayorSueldoMasculino > sueldoSexoMayorSueldoFemenino && sueldoSexoMayorSueldoMasculino > sueldoSexoMayorSueldoNoBinario)
	{
		sexoMayorSueldo = "Masculino";
	}else
	{
		if(sueldoSexoMayorSueldoFemenino > sueldoSexoMayorSueldoNoBinario)
		{
			sexoMayorSueldo = "Femenino";
		}else
		{
			sexoMayorSueldo = "NoBinario";
		}
	}

	if(contadorAnalista != 0)
	{
		promedioSueldoAnalista = acumuladorSueldoAnalista / sumaTotalCantidadEmpleados;
		document.write("El promedio de sueldos de Analista es " + promedioSueldoAnalista + "<br>");
	}else
	{
		document.write("No se han ingresado Empleados Analistas <br>");
	}
	if(contadorProgramador != 0)
	{
		promedioSueldoProgramador = acumuladorSueldoProgramador / sumaTotalCantidadEmpleados;
		document.write("El promedio de sueldos de Programadores es " + promedioSueldoProgramador + "<br>");
	}else
	{
		document.write("No se han ingresado Empleados Programadores <br>");
	}
	if(contadorQA != 0)
	{
		promedioSueldoQA = acumuladorSueldoQA / sumaTotalCantidadEmpleados;
		document.write("El promedio de sueldos de QA es " + promedioSueldoQA + "<br>");
	}else
	{
		document.write("No se han ingresado Empleados QA <br>");
	}
	document.write("El sexo que percibe el mayor sueldo es " + sexoMayorSueldo + "<br>");
	if(banderaFemenino != false)
	{
		document.write("El nombre de la empleada con mas sueldo es " + nombreEmpleadoFemeninoMayorSueldo + "<br>");
	}else
	{
		document.write("No se han ingresado empleadas Femeninos <br>");
	}
	if(contadorProgramadorNoBinario != 0)
	{
		document.write("La cantidad de programadores noBinarios que cobran sueldos entre 20000 y 55000 es " + contadorProgramadorNoBinario + "<br>");
	}else
	{
		document.write("No se han ingresado empleados programadores noBinarios que cobren sueldos entre 20000 y 55000 <br>");
	}



}
