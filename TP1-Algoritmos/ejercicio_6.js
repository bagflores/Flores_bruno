let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let numeroMes = parseInt(prompt("Introduce un número del 1 al 12 para obtener el nombre del mes:"));
//declaro variables, con parseInt convierto el ingreso del usuario a un número entero para poder ser validado en "if"
if (numeroMes >= 1 && numeroMes <=12) {
    //inicio el bucle if que verifica si el valor ingresado esta entre 1 y 12 (inclusive)
    let indiceMes = numeroMes - 1;
    //con la instruccion let declaro el vamlorMes en -1
    let mesSeleccionado = meses[indiceMes];
    //con la instruccion let declaro el mesSeleccionado del punto anterior
    document.write(`El mes corresponde al número ${numeroMes} es: ${mesSeleccionado}`);
    //indica por pantalla el dato ingresado dentro del indice
} else {
    document.write("El número ingresado no esta en el rango válido (1-12).");
    //en caso de no inrgesar u valor valido dentro del indice devuelvo por pantalla la indicacion
}
