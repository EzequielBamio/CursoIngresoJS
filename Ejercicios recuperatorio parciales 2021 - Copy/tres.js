/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades,
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:

a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)


*/
function mostrar()
{
	let respuesta;
	let nombreCliente;
	let cantidadLamparas;
	let marca;
	let precioUnidad;
	let totalCompra;
	let marcaMayorVentasRealizadas;
	let promedioMarcaFelipeLamparas;
	let promedioMarcaArgentinaLuz;
	let promedioMarcaIlluminatis;
	let totalVentasRealizadas;

	let descuento;
	let dineroPerdidoDescuento;
	let acumuladorArgentinaLuz;
	let acumuladorFelipeLamparas;
	let acumuladorIlluminatis;
	let acumuladorTotalCompra;
	let contadorArgentinaLuz;
	let contadorFelipeLamparas;
	let contadorIlluminatis;
	descuento = 0;
	contadorArgentinaLuz = 0;
	contadorFelipeLamparas = 0;
	contadorIlluminatis = 0;
	dineroPerdidoDescuento = 0;
	acumuladorArgentinaLuz = 0;
	acumuladorFelipeLamparas = 0;
	acumuladorIlluminatis = 0;
	acumuladorTotalCompra = 0;

	respuesta = "si";

	while(respuesta == "si")
	{

		nombreCliente = prompt("Ingrese el nombre de su cliente");
		while(isNaN(nombreCliente) == false)
		{
			nombreCliente = prompt("ERROR: Reingrese el nombre de su cliente");
		}

		cantidadLamparas = prompt("Ingrese la cantidad lamparas de su cliente");
		while(isNaN(cantidadLamparas) == true)
		{
			cantidadLamparas = prompt("ERROR: Reingrese la cantidad lamparas de su cliente");
		}
		cantidadLamparas = parseInt(cantidadLamparas);

		marca = prompt("Ingrese la marca. FelipeLamparas ArgentinaLuz Illuminatis");
		while(isNaN(marca) == false || marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis")
		{
			marca = prompt("ERROR: Reingrese la marca. FelipeLamparas ArgentinaLuz Illuminatis");
		}

		precioUnidad = prompt("Ingrese el precio por unidad");
		while(isNaN(precioUnidad) == true)
		{
			precioUnidad = prompt("ERROR: Reingrese el precio por unidad");
		}
		precioUnidad = parseInt(precioUnidad);

		totalCompra = precioUnidad * cantidadLamparas;

		switch(marca)
		{
			case "argentinaluz":
				contadorArgentinaLuz++;
				acumuladorArgentinaLuz += cantidadLamparas;
				if(cantidadLamparas > 2)
				{
					descuento = totalCompra * 0.05;
				}
				break;
				case "felipelamparas":
					contadorFelipeLamparas++;
					acumuladorFelipeLamparas += cantidadLamparas;
					if(cantidadLamparas > 4)
					{
						descuento = totalCompra * 0.10;
					}
					break;
					case "illuminatis":
						contadorIlluminatis++;
						acumuladorIlluminatis += cantidadLamparas;
						break;
		}

		//b) Cuanto "perdio" la empresa en concepto de descuentos.
		dineroPerdidoDescuento += descuento;
		//a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
		totalCompra = totalCompra - descuento;
		acumuladorTotalCompra += totalCompra;

		respuesta = prompt("Quiere seguir ingresando datos de ventas? si o no");
	}

	totalVentasRealizadas = contadorArgentinaLuz + contadorFelipeLamparas + contadorIlluminatis;

	//d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
	if(contadorArgentinaLuz > contadorFelipeLamparas && contadorArgentinaLuz > contadorIlluminatis)
	{
		marcaMayorVentasRealizadas = "ArgentinaLuz";
	}else
	{
		if(contadorFelipeLamparas > contadorIlluminatis)
		{
			marcaMayorVentasRealizadas = "FelipeLamparas";
		}else
		{
			marcaMayorVentasRealizadas = "Illuminatis";
		}
	}

	document.write("La empresa recauda en total " + acumuladorTotalCompra + "<br>");

	if(dineroPerdidoDescuento != 0)
	{
		document.write("La empresa perdio " + dineroPerdidoDescuento + "<br>");
	}else
	{
		document.write("La empresa no perdio nada, no se aplicaron descuentos <br>");
	}
	//c) El promedio de la cantidad de lamparas vendidas de cada marca.
	if(contadorArgentinaLuz != 0)
	{
		promedioMarcaArgentinaLuz = acumuladorArgentinaLuz / totalVentasRealizadas;
		document.write("El promedio de la cantidad de lamparas vendidas de ArgentinaLuz es " + promedioMarcaArgentinaLuz + "<br>");
	}else
	{
		document.write("No se ingresaron lamparas de la marca ArgentinaLuz <br>");
	}
	if(contadorFelipeLamparas != 0)
	{
		promedioMarcaFelipeLamparas = acumuladorFelipeLamparas / totalVentasRealizadas;
		document.write("El promedio de la cantidad de lamparas vendidas de FelipeLamparas es " + promedioMarcaFelipeLamparas + "<br>");
	}else
	{
		document.write("No se ingresaron lamparas de la marca FelipeLamparas <br>");
	}
	if(contadorIlluminatis != 0)
	{
		promedioMarcaIlluminatis = acumuladorIlluminatis / totalVentasRealizadas;
		document.write("El promedio de la cantidad de lamparas vendidas de Illuminatis es " + promedioMarcaIlluminatis + "<br>");
	}else
	{
		document.write("No se ingresaron lamparas de la marca Illuminatis <br>");
	}

	document.write("La marca que mas ventas realizo es " + marcaMayorVentasRealizadas + "<br>");

}
