/* 
"super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

	Ezequiel Bamio
*/

function probarEjercicio()
{
	//declarar las variables
	let tipoProducto;
	let nombreProducto;
	let importeProducto;
	let procedencia;
	let pesoProducto;
	let comestibleMasPesado;
	let nombreComestibleMasPesado;
	let producoMasCaro;
	let nombreProductoMasCaro;
	let nombreImporteElaboradoMasBarato;
	let importeElaboradoMasBarato;
	let promedioPesoComestible;
	let promedioPesoLimpieza;
	let promedioPesoOtros;
	let tipoQueMasAparece;

	let acumuladorImporteProductoElaborados;
	let acumuladorPromedioPesosComestibles;
	let acumuladorPromedioPesosLiempieza;
	let acumuladorPromedioPesosOtros;
	let contadorLimpieza;
	let contadorComestibles;
	let contadorOtros;
	let contadorProcedenciaElaborado;

	acumuladorImporteProductoElaborados = 0
	acumuladorPromedioPesosComestibles = 0;
	acumuladorPromedioPesosLiempieza = 0;
	acumuladorPromedioPesosOtros = 0;
	contadorLimpieza = 0;
	contadorComestibles = 0;
	contadorOtros = 0;
	contadorProcedenciaElaborado = 0;

	let banderaProductoMasCaro;
	banderaProductoMasCaro = false;
	
	let respuesta;
	respuesta = "si"
	

	//hacer un bucle hasta que el usuario quiera
	//pedir y validar los datos: tipo(liempieza, comestible, otros), nombre del producto, importe del producto (no mayor a 1000 pesos)
	//procedencia(importado, nacional, elaborado) y Peso (no mayor a 30 kilos)
	while(respuesta == "si")
	{
		tipoProducto = prompt("Ingrese el producto. limpieza, comestible, otros")
		while(isNaN(tipoProducto) == false || tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
		{
			tipoProducto = prompt("ERROR: Reingrese el producto. limpieza, comestible, otros")
		}
		nombreProducto = prompt("Ingrese el nombre del producto")
		while(isNaN(nombreProducto) == false)
		{
			nombreProducto = prompt("ERROR: Reingrese el nombre del producto")
		}
		importeProducto = prompt("Ingrese el importe del producto")
		while(isNaN(importeProducto) == true || importeProducto > 1000)
		{
			importeProducto = prompt("ERROR: Reingrese el importe del producto")
		}
		importeProducto = parseInt(importeProducto);
		procedencia = prompt("Ingrese la procedencia. importado, nacional, elaborado")
		while(isNaN(procedencia) == false || procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado")
		{
			procedencia = prompt("ERROR: Reingrese la procedencia. importado, nacional, elaborado")
		}
		pesoProducto = prompt("Ingrese el peso del producto")
		while(isNaN(pesoProducto) == true || pesoProducto > 30)
		{
			pesoProducto = prompt("ERROR: Reingrese el peso del producto")
		}
		pesoProducto = parseInt(pesoProducto);

		//D. Mostrar el tipo de mercadera que mas aparece
		switch(tipoProducto)
		{
			case "limpieza":
				acumuladorPromedioPesosLiempieza += pesoProducto;
				contadorLimpieza++;
				break;

			case "comestible":
				acumuladorPromedioPesosComestibles += pesoProducto;

				if(pesoProducto > comestibleMasPesado || contadorComestibles == 0)	//A. Mostrar el nombre del mas pesado del comestibles
				{
					comestibleMasPesado = pesoProducto;
					nombreComestibleMasPesado = nombreProducto;
				}
				contadorComestibles++;
				break;

			case "otros":
				acumuladorPromedioPesosOtros += pesoProducto;
				contadorOtros++;
				break;
		}
	
		//B. Mostrar el nombre mas caro de todos los productos
		if(importeProducto > producoMasCaro || banderaProductoMasCaro == false)
		{
			producoMasCaro = importeProducto;
			nombreProductoMasCaro = nombreProducto;

			banderaProductoMasCaro = true;
		}
		//C. Mostrar el nombre mas barato de los elaborados
		//E. Calcular el porcentaje de productos elaborados por sobre el total
		if(procedencia == "elaborado")
		{
			//acumuladorImporteProductoElaborados += importeProducto;

			if(importeProducto < importeElaboradoMasBarato || contadorProcedenciaElaborado == 0)
			{
				importeElaboradoMasBarato = importeProducto;
				nombreImporteElaboradoMasBarato = nombreProducto;

			}
			contadorProcedenciaElaborado++;
		}

		respuesta = prompt("Quiere seguir ingresando productos? - si - no")
	}
	if(contadorComestibles > contadorLimpieza && contadorComestibles > contadorOtros)
	{
		tipoQueMasAparece = "comestible";
	}else
	{
		if(contadorLimpieza > contadorComestibles && contadorLimpieza > contadorOtros)
		{
			tipoQueMasAparece = "limpieza";
		}else
		{
			tipoQueMasAparece = "otros";
		}
	}

	//E.
	sumaTotalProcedencia = contadorComestibles + contadorLimpieza + contadorOtros
	porcentajeProductoElaborados = sumaTotalProcedencia / contadorProcedenciaElaborado *100;

	//salida 
	if(contadorComestibles != 0)
	{
		document.write("El comestible mas pesado es " + comestibleMasPesado + "<br>");
	}else
	{
		document.write("No se han ingresado comestibles"+ "<br>");
	}

	document.write("El producto mas caro es " + nombreProductoMasCaro + " " + producoMasCaro + "<br>");

	if(contadorProcedenciaElaborado != 0)
	{
		document.write("El elaborado mas barato es " + nombreImporteElaboradoMasBarato + " " + importeElaboradoMasBarato + "<br>");
	}else
	{
		document.write("No sean ingresado productos elaborados" + "<br>");
	}

	document.write("El tipo de mercaderia que mas aparece es " + tipoQueMasAparece + "<br>");
	document.write("EL porcentaje de productos elaborados es " + porcentajeProductoElaborados + "<br>");
	
	if(contadorComestibles != 0)
	{
		promedioPesoComestible = acumuladorPromedioPesosComestibles / contadorComestibles;
		document.write("El promedio de pesos de tipo Comestible es " + promedioPesoComestible + "<br>") 
	}else
	{
		document.write("No se han ingresado productos Comestibles" + "<br>")
	}
	if(contadorLimpieza != 0)
	{
		promedioPesoLimpieza = acumuladorPromedioPesosLiempieza / contadorLimpieza;
		document.write("El promedio de pesos de tipo Limpieza es: " + promedioPesoLimpieza + "<br>") 
	}else
	{
		document.write("No se han ingresado productos Limpieza" + "<br>")
	}
	if(contadorOtros != 0)
	{
		//F. Calcular el promedio de pesos por cada tipo ingresado
		promedioPesoOtros = acumuladorPromedioPesosOtros / contadorOtros;
		document.write("El promedio de pesos de tipo Otros es: " + promedioPesoOtros + "<br>") 
	}else
	{
		document.write("No se han ingresado productos Otros" + "<br>")
	}

}


