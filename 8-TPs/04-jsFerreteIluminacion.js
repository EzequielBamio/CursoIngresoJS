/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

TEST:
//35*6 = 210
A: 6 Lamparitas ? 50% = 105
//35*5 = 175
B: 5 Lamparitas ARGLuz ? 40% : 30% = 105 | 122.5(+IIBB = 134.75)
//35*4 = 140
C: 4 Lamparitas ArgLuz||FelipeLamparas ? 25% : 20% = 105 | 112
//35*3 = 105
D: 3 Lamparitas ArgLuz ? 15% : FelipeLamparas ? 10% : 5% = 89.25 | 94.5 | 99.75
//35*10 = 350
E: 10 Lamparitas con descuento es > a 120 ? +10% = 192.5

.) 1 o 2 lamparitas = 35 | 70
                            
 
                                EZEQUIEL BAMIO
*/
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let totalPrecioLampara;
    let porcentaje;
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    

    //TOMAR EL VALOR POR ID
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    
    //Calcular el precio de las X cantidad de lamparas
    totalPrecioLampara = cantidadLamparas * 35;

    //PARSEO
    cantidadLamparas = parseInt(cantidadLamparas);
    totalPrecioLampara = parseFloat(totalPrecioLampara);


    switch(cantidadLamparas)
    {
        case 5:
            if(marca == "ArgentinaLuz")
            {
            porcentaje = 0.6;
            }else
            {
            porcentaje = 0.7; 
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz")
                {
                    porcentaje = 0.75;
                }else
                {
                    if(marca == "FelipeLamparas")
                    {
                        porcentaje = 0.75;
                    }else
                    {
                        porcentaje = 0.8;
                    }
            break;
    }



    if(cantidadLamparas > 5)
    {
        porcentaje = 0.5;
    }else
    {
        if(cantidadLamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.6;
            }else
            {
                porcentaje = 0.7; 
            }
        }else
        {
            if(cantidadLamparas == 4)
            {
                
                }
            }else
            {
                if(cantidadLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 0.85;
                    }else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje = 0.9;
                        }else
                        {
                            porcentaje = 0.95;
                        }
                    }
                }else
                {
                    porcentaje = 0; 
                }
            }
        }
    } 

    precioFinal = totalPrecioLampara * porcentaje;

       if(precioFinal > 119)
        {
            ingresosBrutos = precioFinal + (precioFinal * 0.1);
            precioFinal = ingresosBrutos;
            alert("IIBB Usted pago: $" + ingresosBrutos);
        }
        
            document.getElementById("txtIdprecioDescuento").value = precioFinal; 


        
}



/*function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let totalPrecioLampara;
    let porcentaje;
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    

    //TOMAR EL VALOR POR ID
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    
    //Calcular el precio de las X cantidad de lamparas
    totalPrecioLampara = cantidadLamparas * 35;

    //PARSEO
    cantidadLamparas = parseInt(cantidadLamparas);
    totalPrecioLampara = parseFloat(totalPrecioLampara);



    if(cantidadLamparas > 5)
    {
        porcentaje = 0.5;
    }else
    {
        if(cantidadLamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.6;
            }else
            {
                porcentaje = 0.7; 
            }
        }else
        {
            if(cantidadLamparas == 4)
            {
                if(marca == "ArgentinaLuz")
                {
                    porcentaje = 0.75;
                }else
                {
                    if(marca == "FelipeLamparas")
                    {
                        porcentaje = 0.75;
                    }else
                    {
                        porcentaje = 0.8;
                    }
                }
            }else
            {
                if(cantidadLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 0.85;
                    }else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje = 0.9;
                        }else
                        {
                            porcentaje = 0.95;
                        }
                    }
                }else
                {
                    porcentaje = 0; 
                }
            }
        }
    } 

    precioFinal = totalPrecioLampara * porcentaje;

       if(precioFinal > 119)
        {
            ingresosBrutos = precioFinal + (precioFinal * 0.1);
            precioFinal = ingresosBrutos;
            alert("IIBB Usted pago: $" + ingresosBrutos);
        }
        
            document.getElementById("txtIdprecioDescuento").value = precioFinal; 


        
}*/
