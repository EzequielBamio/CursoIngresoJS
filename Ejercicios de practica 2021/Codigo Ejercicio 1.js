/*
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:

A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?

Test
Ezequiel programacion en curso masculino 19 10
Candela diseño grafico en curso femenino 18 8
Agustin psicologia abandono nobinario 23 4
sofia psicologia finalizo feminimo 26 9
german programacion finalizo masculino 25 9
micaela psicologia en curso femenino 20 7

A. P 2 PS 3 D 1
B. 0
C. 1
D. 9
E. sofia feminimo 26
F. Agustin 4 abandono
G. psicologia

	Ezequiel Bamio
*/

function probarEjercicio()
{
	let carrera;
	let estadoCarrera;
	let sexo;
	let edad;
	let nota;
	let contadorProgramacion;
	let contadorPsicologia;
	let contadorDiseñoGrafico;
	let contadorMujeresProgramacion;
	let contadorNotas;
	let contadorNoBinario;
	let acumuladorNotas;
	let promedioNotasFinalizantes;
	let nombreAlumnoViejo;
	let sexoAlumnoViejo;
	let edadAlumnoViejo;
	let nombreNoBinario;
	let notaNoBinario;
	let estadoCarreraNoBinario;
	let carreraConMasAlumnos;
	let respuesta;
	contadorDiseñoGrafico = 0;
	contadorPsicologia = 0;
	contadorProgramacion = 0;
	contadorMujeresProgramacion = 0;
	contadorNotas = 0;
	acumuladorNotas = 0;
	contadorNoBinario = 0;

	
	respuesta = "si";

	while(respuesta == "si")
	{
		nombreAlumno = prompt("Ingrese el nombre del Alumno");
		while(isNaN(nombreAlumno) == false)
		{
			nombreAlumno = prompt("ERROR: Reingrese el nombre del Alumno");
		}
		carrera = prompt("Ingrese la carrera")
		while(isNaN(carrera) == false || carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico")
		{
			carrera = prompt("ERRO: Reingrese la carrera");
		}
		estadoCarrera = prompt("Ingrese el Estado carrera");
		while(isNaN(estadoCarrera) == false || estadoCarrera != "en curso" && estadoCarrera != "abandonado" && estadoCarrera != "finalizo")
		{
			estadoCarrera = prompt("ERRO: Reingrese el Estado carrera");
		}
		sexo = prompt("Ingrese el sexo");
		while(isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "nobinario")
		{
			sexo = prompt("ERRO: Reingrese el sexo");
		}
		edad = prompt("Ingrese la edad");
		while(isNaN(edad) == true || edad < 18)
		{
			edad = prompt("ERRO: Reingrese la edad");
		}
		nota = prompt("Ingrese la nota");
		while(isNaN(nota) == true || nota < 1 || nota > 10)
		{
			nota = prompt("ERRO: Reingrese la nota");
		}
		nota = parseInt(nota);

		switch(carrera)
		{
			case "diseño grafico":
				contadorDiseñoGrafico++;
			break;

			case "programacion":
				contadorProgramacion++;
				if(sexo == "femenino" && estadoCarrera == "en curso")
				{
					contadorMujeresProgramacion++;
				}
			break;

			case "psicologia":
				if(edad > edadAlumnoViejo || contadorPsicologia == 0)
				{
					nombreAlumnoViejo = nombreAlumno;
					sexoAlumnoViejo = sexo;
					edadAlumnoViejo = edad;
				}

				if(sexo == "nobinario")
				{
					if(nota > notaNoBinario || contadorNoBinario == 0)
					{
						nombreNoBinario = nombreAlumno;
						notaNoBinario = nota;
						estadoCarreraNoBinario = estadoCarrera;
					}

				contadorNoBinario++
				}

				contadorPsicologia++;
			break;
		}

		if(sexo == "nobinario")
		{
			if(nota > notaNoBinario || contadorNoBinario == 0)
				{
					nombreNoBinario = nombreAlumno;
					notaNoBinario = nota;
					estadoCarreraNoBinario = estadoCarrera;
				}

			contadorNoBinario++
		}

		if(estadoCarrera == "finalizo")
		{
			acumuladorNotas += nota;
			contadorNotas++;
		}

		respuesta = prompt("Quiere seguir ingregando alumnos? si/no")
	}

	if(contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDiseñoGrafico)
		{
			carreraConMasAlumnos = "Programacion";
		}else
		{
			if(contadorPsicologia > contadorProgramacion && contadorPsicologia > contadorDiseñoGrafico)
			{
				carreraConMasAlumnos = "Psicologia";
			}else
			{
				carreraConMasAlumnos = "Diseño Grafico"
			}
		}

	//salida
	document.write("La cantidad de Alumnos de Programacion es " + contadorProgramacion + ", Psicologia " + contadorPsicologia + " y de Diseño Grafico " + contadorDiseñoGrafico + "<br>");
	if(contadorMujeresProgramacion != 0)
	{
		document.write("La cantidad de mujeres de programacion es " + contadorMujeresProgramacion + "<br>");
	}else
	{
		document.write("No se ingreso Alumnas Femininas en programacion" + "<br>");
	}
	if(contadorNoBinario != 0)
	{
		document.write("La cantidad de Alumnos noBinarios es " +  contadorNoBinario + "<br>");
	}else
	{
		document.write("No se ingreso Alumnos noBinarios" + "<br>");
	}
	if(contadorNotas != 0)
	{
		promedioNotasFinalizantes = acumuladorNotas / contadorNotas;
		document.write("El promedio de notas de Alumnos Finalizantes " + promedioNotasFinalizantes + "<br>");
	}else
	{
		document.write("No se ingreso Alumnos Finalizantes" + "<br>");
	}
	if(contadorPsicologia != 0)
	{
		document.write("El alumno mas viejo en la carrera Psicologia es " + nombreAlumnoViejo + " " + sexoAlumnoViejo + " " + edadAlumnoViejo + " años <br>");
	}else
	{
		document.write("No se ingresaron alumnos en la carrera Psicologia" + "<br>");
	}
	if(contadorNoBinario != 0 && carrera == "psicologia")
	{
		document.write("El mejor alumno noBinario que estudia Psicologia " + nombreNoBinario + " y su nota es " + notaNoBinario + " el estado de carrera del alumno es " + estadoCarreraNoBinario + "<br>")
	}else
	{
		document.write("No se ingresaron alumnos en la carrera Psicologia o no hay alumnos NoBinarios" + "<br>");
	}
	
	document.write("La carrera con mas alumnos es " + carreraConMasAlumnos + "<br>");
}