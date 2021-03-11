/*
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.

    Ezequiel Bamio

*/
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo = prompt("Ingrese el Largo");
    ancho = prompt("Ingrese el ancho");

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;

    alert("El perimetro del rectangulo es de : " + perimetro);

}
