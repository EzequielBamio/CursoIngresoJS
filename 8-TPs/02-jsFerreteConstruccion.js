/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadAlambre;

    largo = document.getElementById("txtIdLargo").value; //Toma los datos de la caja de texto y lo guarda en la variable
    
    ancho = document.getElementById("txtIdAncho").value; //Toma los datos de la caja de texto y lo guarda en la variable

    //calculamos el perimetro
    perimetro = largo * 2 + ancho * 2;
    //calculamos cuanto alambre comprar... multiplicamos por 3 ya que son tres hilos de alambre por perimetro
    cantidadAlambre = perimetro * 3;

    alert("La cantidad de alambre que se debe comprar es de: " + cantidadAlambre);



}
function Circulo () 
{
	
}
function Materiales () 
{
	
}