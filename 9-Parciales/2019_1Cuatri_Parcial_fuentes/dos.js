function mostrar()
{
    let nombrePersona1;
    let nombrePersona2;
    let kilosPersona1;
    let kilosPersona2;
    let sumaKilos;
    let promedioKilos;

    nombrePersona1 = prompt("Ingrese su nombre");
    nombrePersona2 = prompt("Ingrese su nombre");
    kilosPersona1 = prompt("Ingrese su peso en Kilos");
    kilosPersona2 = prompt("Ingrese su peso en Kilos");

    kilosPersona1 = parseInt(kilosPersona1);
    kilosPersona2 = parseInt(kilosPersona2);

    sumaKilos = kilosPersona1 + kilosPersona2;
    promedioKilos = sumaKilos / 2;

    alert("Ustedes se llaman " + nombrePersona1 + " y " + nombrePersona2 + " pesan " + kilosPersona1 + " y " + 
    kilosPersona2 + " kilos , que sumados son " + sumaKilos + " kilos y el promedio de peso " + promedioKilos);
  
}
