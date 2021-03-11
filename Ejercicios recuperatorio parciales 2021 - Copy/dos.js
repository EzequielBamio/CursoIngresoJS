/* 
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 

    Ezequiel Bamio

*/
function mostrar()
{
    let i;
    let nombreAlumno;
    let carreraAlumno;
    let sexoAlumno;
    let cantidadMaterias;
    let notaPromedio;
    let edad;
    let nombreMejorPromedioAlumnoFisica;
    let nombreAlumnaMasJoven;
    let edadAlumnaMasJoven;
    let porcentajeQuimica;
    let porcentajeFisica;
    let porcentajeSistemas;
    let edadEstudianteCursaMasMaterias;
    let nombreEstudianteCursaMasMaterias;
    let cantidadEstudianteCursaMasMaterias;
    let mejorPromedioAlumnoFisica;
    let sumaTotalAlumnos;

    let banderaEstudianteCursaMasMaterias;
    let banderaAlumnaMasJoven;
    banderaAlumnaMasJoven = false;
    banderaEstudianteCursaMasMaterias = false;

    let contadorQuimica;
    let contadorFisica;
    let contadorSistema;
    contadorQuimica = 0;
    contadorFisica = 0;
    contadorSistema = 0;

    for(i = 0; i < 500 ; i++)
    {
        nombreAlumno = prompt("Ingrese el nombre de su Alumno");
		while(isNaN(nombreAlumno) == false)
		{
			nombreAlumno = prompt("ERROR: Reingrese el nombre de su Alumno");
		}

		edad = prompt("Ingrese la edad de su Alumno");
		while(isNaN(edad) == true)
		{
			edad = prompt("ERROR: Reingrese la edad de su Alumno");
		}
		edad = parseInt(edad);

		sexoAlumno = prompt("Ingrese el sexo de su Alumno. femenino masculino nobinario");
		while(isNaN(sexoAlumno) == false || sexoAlumno != "femenino" && sexoAlumno != "masculino" && sexoAlumno != "nobinario")
		{
			sexoAlumno = prompt("ERROR: Reingrese el sexo de su Alumno. femenino masculino nobinario");
		}

		carreraAlumno = prompt("Ingrese el carrera de su Alumno. quimica fisica sistema");
		while(isNaN(carreraAlumno) == false || carreraAlumno != "quimica" && carreraAlumno != "fisica" && carreraAlumno != "sistema")
		{
			carreraAlumno = prompt("ERROR: Reingrese el carrera de su Alumno. quimica fisica sistema");
		}

        cantidadMaterias = prompt("Ingrese la cantidad de materias de su Alumno");
		while(isNaN(cantidadMaterias) == true || cantidadMaterias < 1 || cantidadMaterias > 5)
		{
			cantidadMaterias = prompt("ERROR: Reingrese la cantidad de materias de su Alumno");
		}
		cantidadMaterias = parseInt(cantidadMaterias);

		notaPromedio = prompt("Ingrese la nota promedio de su Alumno");
		while(isNaN(notaPromedio) == true || notaPromedio < 0 || notaPromedio > 10)
		{
			notaPromedio = prompt("ERROR: Reingrese la nota promedio de su Alumno");
		}
		notaPromedio = parseInt(notaPromedio);

        switch(carreraAlumno)
        {
            case "fisica":
                if(notaPromedio > mejorPromedioAlumnoFisica || contadorFisica == 0)
                {
                    nombreMejorPromedioAlumnoFisica = nombreAlumno;
                    mejorPromedioAlumnoFisica = notaPromedio;
                }
                contadorFisica++;
                break;
                case "quimica":
                    contadorQuimica++;
                    break;
                    case "sistema":
                        contadorSistema++;
                        break;
        }

        if(edad < edadAlumnaMasJoven || banderaAlumnaMasJoven == false)
        {
            edadAlumnaMasJoven = edad;
            nombreAlumnaMasJoven = nombreAlumno;

            banderaAlumnaMasJoven = true;
        }

        if(cantidadMaterias > cantidadEstudianteCursaMasMaterias && carreraAlumno != "quimica")
        {
            if(banderaEstudianteCursaMasMaterias == false)
            {
                edadEstudianteCursaMasMaterias = edad;
                nombreEstudianteCursaMasMaterias = nombreAlumno;

                banderaEstudianteCursaMasMaterias = true;
            }
        }

    }//FIN FOR

    sumaTotalAlumnos = contadorFisica + contadorQuimica + contadorSistema;

    if(contadorFisica != 0)
    {
        document.write("El nombre del mejor promedio de los alumnos que estudian Fisica es " + nombreMejorPromedioAlumnoFisica + "<br>");
    }else
    {
        document.write("No se ingresaron alumnos que estudien Fisica <br>");
    }
    if(banderaAlumnaMasJoven != false)
    {
        document.write("El nombre de la alumna mas joven es " + nombreAlumnaMasJoven + "<br>");
    }else
    {
        document.write("No se ingresaron del sexo femenino <br>");
    }
    if(contadorFisica != 0)
    {
        porcentajeFisica = contadorFisica / sumaTotalAlumnos;
        document.write("El porcentaje de estudiantes que estudian la carrera de Fisica es " + porcentajeFisica + "<br>");
    }else
    {
        document.write("No se ingresaron estudiantes de Fisicas <br>");
    }
    if(contadorQuimica != 0)
    {
        porcentajeQuimica = contadorQuimica / sumaTotalAlumnos;
        document.write("El porcentaje de estudiantes que estudian la carrera de Quimica es " + porcentajeQuimica + "<br>");
    }else
    {
        document.write("No se ingresaron estudiantes de Quimica <br>");
    }
    if(contadorSistema != 0)
    {
        porcentajeSistemas = contadorSistema / sumaTotalAlumnos;
        document.write("El porcentaje de estudiantes que estudian la carrera de Sistema es " + porcentajeSistemas + "<br>");
    }else
    {
        document.write("No se ingresaron estudiantes de Sistemas <br>");
    }
    document.write("la edad y nombre del estudiante que cursa mas materias exceptuando Quimica es " + nombreEstudianteCursaMasMaterias + " y su edad es " + edadEstudianteCursaMasMaterias + "<br>");

} 

