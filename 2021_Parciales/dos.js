/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

  Ezequiel Bamio

*/
function mostrar()
{
  //declaramos variables
  let situcacionLaboral;
  let nombreAlumno;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let mejorPromedioSoloEstudiante;
  let nombreMejorPromedioSoloEstudiante;
  let alumnoMasViejoEstudiante;
  let nombreAlumnoMasViejoEstudiante;
  let promedioSoloEstudiante;
  let promedioBuscando;
  let promedioTrabajando;
  let sumaTotalSituacionLaboral;
  let alumnoCursaMenosMaterias;
  let edadAlumnoCursaMenosMaterias;
  let nombreAlumnoCursaMenosMaterias;

  let acumuladorNotasSoloEstudiante;
  let acumuladorNotasBuscando;
  let acumuladorTrabajando;
  let contadorSoloEstudiante;
  let contadorSoloTrabajando;
  let contadorSoloBuscando;
  acumuladorNotasSoloEstudiante = 0;
  acumuladorNotasBuscando = 0;
  acumuladorTrabajando = 0;
  contadorSoloEstudiante = 0;
  contadorSoloTrabajando = 0;
  contadorSoloBuscando = 0;


  let respuesta;
  respuesta = "si";

  while(respuesta == "si")
  {
    
    nombreAlumno = prompt("Ingrese el nombre del alumno.")
    while (isNaN(nombreAlumno) == false) {
      nombreAlumno  = prompt("ERROR: Reingrese el nombre del alumno.")
    }

    situcacionLaboral = prompt("Ingrese su situacion laboral.")
    while (isNaN(situcacionLaboral) == false || situcacionLaboral != "buscando" && situcacionLaboral != "trabajando" && situcacionLaboral != "solo estudiante") {
      situcacionLaboral  = prompt("ERROR: Reingrese su situacion laboral.")
    }

    cantidadMaterias = prompt("Ingrese la cantidad de materias")
    while (isNaN(cantidadMaterias) == true || cantidadMaterias < 1 && cantidadMaterias > 8) { 
      cantidadMaterias = prompt("ERROR: Reingrese la cantidad de materias")
    }
    cantidadMaterias = parseInt(cantidadMaterias);

    sexo = prompt("Ingrese el sexo.")
    while (isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "nobinario") {
      sexo  = prompt("ERROR: Reingrese el sexo.")
    }

    notaPromedio = prompt("Ingrese la nota promedio")
    while (isNaN(notaPromedio) == true || notaPromedio < 1 && notaPromedio > 10) { 
      notaPromedio = prompt("ERROR: Reingrese la nota promedio")
    }
    notaPromedio = parseInt(notaPromedio);

    edad = prompt("Ingrese la edad")
    while (isNaN(edad) == true) { 
      edad = prompt("ERROR: Reingrese lad edad ")
    }
    edad = parseInt(edad);

    switch(situcacionLaboral)
    {
      case "buscando"://D
        if(cantidadMaterias < alumnoCursaMenosMaterias || contadorSoloBuscando == 0)
        {
          alumnoCursaMenosMaterias = cantidadMaterias;
          nombreAlumnoCursaMenosMaterias = nombreAlumno;
          edadAlumnoCursaMenosMaterias = edad;
        }
        contadorSoloBuscando++;
        acumuladorNotasBuscando += notaPromedio;
        break;

        case "solo estudiante":
          if(edad > alumnoMasViejoEstudiante || contadorSoloEstudiante == 0) //B
          {
            alumnoMasViejoEstudiante = edad;
            nombreAlumnoMasViejoEstudiante = nombreAlumno;

            banderaAlumnoViejoEstudiante = true;
          }

          if(notaPromedio > mejorPromedioSoloEstudiante || contadorSoloEstudiante == 0) //A
          {
            mejorPromedioSoloEstudiante = notaPromedio;
            nombreMejorPromedioSoloEstudiante = nombreAlumno;
          }

          acumuladorNotasSoloEstudiante += notaPromedio;
          contadorSoloEstudiante++;
          break;

          case "trabajando":
            acumuladorTrabajando += notaPromedio;
            contadorSoloTrabajando++;
            break;
    }

    respuesta = prompt("Desesa seguir ingresando alumnos? si o no");

  }
  //C
  sumaTotalSituacionLaboral = contadorSoloBuscando + contadorSoloEstudiante + contadorSoloTrabajando;
  promedioBuscando = acumuladorNotasBuscando / sumaTotalSituacionLaboral;
  promedioSoloEstudiante = acumuladorNotasSoloEstudiante / sumaTotalSituacionLaboral;
  promedioTrabajando = acumuladorTrabajando / sumaTotalSituacionLaboral;


  if(contadorSoloEstudiante != 0)
  {
    document.write("El mejor promedio que NO de los que trabajan o estan buscando es " + nombreMejorPromedioSoloEstudiante + " " + mejorPromedioSoloEstudiante + "<br>");
  }else
  {
    document.write("No se han ingresado de la situacion laboral Solo Estudiando <br>");
  }
  if(contadorSoloEstudiante != 0)
   {
    document.write("El alumno mas viejo que Estudia es " + nombreAlumnoMasViejoEstudiante + " " + alumnoMasViejoEstudiante + "<br>");
  }else
  {
    document.write("No se han ingresado alumnos de la situacion laboral Estudiante <br>");
  }
 
  document.write("El promedio de nota por situacion laboral: Buscando " + promedioBuscando + "<br>");
  document.write("El promedio de nota por situacion laboral: Trabajando " + promedioTrabajando + "<br>");
  document.write("El promedio de nota por situacion laboral: Solo Estudiando " + promedioSoloEstudiante + "<br>");
  if(contadorSoloBuscando != 0)
  {
    document.write("El alumno que cursa menos cantidad de materias y que esta buscando trabajo es " + nombreAlumnoCursaMenosMaterias +
    " con " + alumnoCursaMenosMaterias + " materias, y su edad: " + edadAlumnoCursaMenosMaterias +"<br>");
  }else
  {
    document.write("No se han ingresado alumnos que esten buscando trabajo <br>");
  }

}//FIN
