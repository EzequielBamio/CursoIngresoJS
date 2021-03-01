/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

					Ezequiel Bamio
*/

function mostrar()
{

	let nota;
	nota = Math.floor(Math.random() * 10) + 1;

	if(nota > 8)
	{
		alert("Excelente");
	}
	else
	{
		if(nota > 3 && nota < 9)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}


}//FIN DE LA FUNCIÓN