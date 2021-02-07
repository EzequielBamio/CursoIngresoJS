
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo = prompt("Ingrese el largo");
    ancho = prompt("Ingrese el ancho");

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;

    alert("El perimetro es: " + perimetro);

}
