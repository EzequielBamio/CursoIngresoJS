/*
Enunciado:2

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10) 
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio que no sea masculino
//b) El nombre del mas joven de los alumnos entre los que la dan libre
//c) El promedio de nota por sexo
//d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
  //declaramos variables
  let tipoCursada;
  let nombreAlumno;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let mejorPromedioNoMasculino;
  let alumnoMasJovenDaLibre;
  let promedioNotaSexoMasculino;
  let promedioNotaSexoFemenino;
  let promedioNotaSexoNoBinario;
  let alumnoCursaMasMateriasNoRemota;
  let nombreMejorPromedioNoMasculino;
  let nombreAlumnoMasJovenDaLibre;
  let nombreAlumnoCursaMasMateriasNoRemota;
  let edadAlumnoCursaMasMateriasNoRemota;

  let acumuladorNotaFemenino;
  let acumuladorNotaMasculino;
  let acumuladorNotaNoBinario;
  let contadorMasculino;
  let contadorFeminino;
  let contadorNoBinario;
  contadorMasculino = 0;
  contadorFeminino = 0;
  contadorNoBinario = 0;
  acumuladorNotaFemenino = 0;
  acumuladorNotaMasculino = 0;
  acumuladorNotaNoBinario = 0;

  let banderaMejorPromedioNoMasculino;
  let banderaMasJovenDanLibre;
  let banderaCursaMasMateriasNoRemota;
  banderaCursaMasMateriasNoRemota = false;
  banderaMasJovenDanLibre = false;
  banderaMejorPromedioNoMasculino = false;

  let respuesta;
  respuesta = "si";

  while(respuesta == "si")
  {

    tipoCursada = prompt("Ingrese el tipo de cursada.")
    while (isNaN(tipoCursada) == false || tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota") {
      tipoCursada  = prompt("ERROR: Reingrese el tipo de cursada.")
    }

    nombreAlumno = prompt("Ingrese el nombre del alumno.")
    while (isNaN(nombreAlumno) == false) {
      nombreAlumno  = prompt("ERROR: Reingrese el nombre del alumno.")
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

    switch(sexo)
    {
      case "femenino":
        acumuladorNotaFemenino += notaPromedio;
        contadorFeminino++;
        break;
        case "masculino":
          acumuladorNotaMasculino += notaPromedio;
          contadorMasculino++;
          break;
          case "nobinario":
            acumuladorNotaNoBinario += notaPromedio;
            contadorNoBinario++;
            break;
    }

    if(notaPromedio > mejorPromedioNoMasculino || banderaMejorPromedioNoMasculino == false) //a) El nombre del mejor promedio que no sea masculino
    {
        mejorPromedioNoMasculino = notaPromedio;
        nombreMejorPromedioNoMasculino = nombreAlumno;

        banderaMejorPromedioNoMasculino = true;
    }

      if(edad < alumnoMasJovenDaLibre || banderaMasJovenDanLibre == false) //b) El nombre del mas joven de los alumnos entre los que la dan libre
      { 
        if(tipoCursada == "libre")
        {
          alumnoMasJovenDaLibre = edad;
          nombreAlumnoMasJovenDaLibre = nombreAlumno;

          banderaMasJovenDanLibre = true;
         }
      }  
      
    if(cantidadMaterias > alumnoCursaMasMateriasNoRemota || banderaCursaMasMateriasNoRemota == false)//d) La edad y nombre del que cursa mas materias que no sean en forma remota
    {
      if(tipoCursada != "remota")
      {
        alumnoCursaMasMateriasNoRemota = cantidadMaterias;
        nombreAlumnoCursaMasMateriasNoRemota = nombreAlumno;
        edadAlumnoCursaMasMateriasNoRemota = edad;

        banderaCursaMasMateriasNoRemota = true;
      }
    }
    
    respuesta = prompt("Quiere seguir ingresandos alumnos? si o no");
  }
  //c) El promedio de nota por sexo
  sumaTotalNotas = contadorFeminino + contadorMasculino + contadorNoBinario;
  promedioNotaSexoMasculino = acumuladorNotaMasculino / sumaTotalNotas;
  promedioNotaSexoFemenino = acumuladorNotaFemenino / sumaTotalNotas;
  promedioNotaSexoNoBinario = acumuladorNotaNoBinario / sumaTotalNotas;


  if(banderaMejorPromedioNoMasculino != false)
  {
    document.write("El mejor promedio que no sea masculino es " + nombreMejorPromedioNoMasculino + "<br>");
  }else
  {
    document.write("No se han ingresado del sexo Femenino, ni de NoBinario <br>");
  }
  if(banderaMasJovenDanLibre != false)
   {
    document.write("El alumno mas joven que da libre es " + nombreAlumnoMasJovenDaLibre + "<br>");
  }else
  {
    document.write("No se han ingresado alumnos del tipo de cursada Libre <br>");
  }
 
  document.write("El promedio de nota por sexo: Masculino " + promedioNotaSexoMasculino + "<br>");
  document.write("El promedio de nota por sexo: Femenino " + promedioNotaSexoFemenino + "<br>");
  document.write("El promedio de nota por sexo: NoBinario " + promedioNotaSexoNoBinario + "<br>");
  if(banderaCursaMasMateriasNoRemota != false)
  {
    document.write("El alumno que cursa mas materias que no es en forma remota es " + nombreAlumnoCursaMasMateriasNoRemota +
    " con " + alumnoCursaMasMateriasNoRemota + " materias, y su edad:" + edadAlumnoCursaMasMateriasNoRemota +"<br>");
  }else
  {
    document.write("No se han ingresado alumnos del tipo de cursada Libre, ni presencial <br>");
  }
  
}


/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro

Test:

Cliente: 10 Bolsas de Cemento $300 c/u y 1 bolsa de arena $160
Total sin descuento: $3,160
Total a pagar con descuento: $2,686
Tipo con mas cantidad de bolsas es: Cemento 10 B
Tipo mas caro: Cemento 300

Cliente2: 2 bolsas de cal $60 c/u, 3 de arena $160 c/u y 1 cemento $300 c/u
Total sin descuento: $900
Total a pagar con descuento: no se hace el descuento.
Tipo con mas cantidad de bolsas es: Arena 3 B
Tipo mas caro: Arena $300

Cliente3: 1 bolsa de arena $160 c/u
Total sin descuento: $160
Total a pagar con descuento: no se hace el descuento.
Tipo con mas cantidad de bolsas es: Arena 1 B
Tipo mas caro: Arena $160

Cliente3: 10 bolsas de Cal $60 c/u, 12 Arena $160 c/u y 10 Cemento $300 c/u
Total sin descuento: $5520
Total a pagar con descuento: 4140
Tipo con mas cantidad de bolsas es: Arena 12 B
Tipo mas caro: Cemento $300

  Ezequiel Bamio

  actualizado


function mostrar()
{
  
  //Declaramos Variables
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorPrecioArena;
  let acumuladorPrecioCal;
  let acumuladorPrecioCemento;
  let cantidadBolsas;
  let descuento;
  let precioBolsa;
  let precioDescuento;
  let respuesta;
  let tipoProducto;
  let tipoMasCaro;
  let totalPagar;
  let banderaTipoMasCaro;

  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0;
  acumuladorPrecioCemento = 0;
  banderaTipoMasCaro = false;
  respuesta = 'si';


  //declaramos un bucle para ingresar datos hasta que el cliente quiera.
  //Validar: tipo( "arena", "cal", "cemento" ), cantidad de bolsas, precio por bolsa(mayor a 0).
  while(respuesta == "si")
  {
    tipoProducto = prompt("Ingrese el producto: arena, cal, cemento")
    while(isNaN(tipoProducto) == false || tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
    {
      tipoProducto = prompt("ERROR: Reingrese el producto: arena, cal, cemento")
    }
    cantidadBolsas = prompt("Ingrese la cantidad de bolsas")
    while(isNaN(cantidadBolsas) == true)
    {
      cantidadBolsas = prompt("ERROR: Reingrese la cantidad de bolsas")
    }
    precioBolsa = prompt("Ingrese el precio por bolsas")
    while(isNaN(precioBolsa) == true || precioBolsa < 1)
    {
      precioBolsa = prompt("ERROR: Reingrese el precio por bolsas")
    }

    cantidadBolsas = parseInt(cantidadBolsas);
    precioBolsa = parseInt(precioBolsa);

    switch(tipoProducto)
    {
      case "arena":
        acumuladorArena += cantidadBolsas;
        acumuladorPrecioArena = precioBolsa;
      break;

      case "cal":
        acumuladorCal += cantidadBolsas;
        acumuladorPrecioCal = precioBolsa;
      break;

      case "cemento":
        acumuladorCemento += cantidadBolsas;
        acumuladorPrecioCemento = precioBolsa ;
      break;
    }

    if(precioBolsa > tipoMasCaro || banderaTipoMasCaro == false)
    {
      tipoMasCaro = precioBolsa;

      banderaTipoMasCaro = true;
    }

    respuesta = prompt("Quiere seguir comprando? si/no")
  }

  totalBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;
  totalPagar = acumuladorPrecioArena + acumuladorPrecioCal + acumuladorPrecioCemento;

  if(totalBolsas > 29) //Si el cliente compra mas de 10 bolsas en total tiene un 25% de descuento
  {
    descuento = 0.75;
  }else
  {
    if(totalBolsas > 9)  //Si el cliente compra mas de 30 bolsas en total tiene un 15% de descuento
    {
      descuento = 0.85;
    }
  }

  precioDescuento = totalPagar * descuento

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    tipoMayorCantidad = "Arena con " + acumuladorArena;
  }else
  {
    if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
    {
      tipoMayorCantidad = "Cal con " + acumuladorCal;
    }else
    {
      tipoMayorCantidad = "Cemento con " + acumuladorCemento;
    }
  }

  //salida

  document.write("El importe total es: " + totalPagar + "<br>");
  if(totalBolsas > 9)
  {
    document.write("El importe total con descuento " + precioDescuento + "<br>");
  }
  document.write("El tipo con mas cantidad de bolsas es: " + tipoMayorCantidad + "<br>");
  document.write("El tipo mas caro es " + tipoMasCaro + "<br>");

}
*/