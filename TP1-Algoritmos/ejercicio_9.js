var notas = [];
//declaro el array con la variable "notas" como vacio
for (var i = 0; i < 5; i++) {
    //el bucle se ejecuta para pedir al usuario que ingrese 5 notas desde el valor de "i" en 0 hasta 5
    var nota = parseInt(prompt("Ingrese la nota " + (i + 1) + ":"));
    //con prompt pedimos al usuario que ingrese una nota. Con la funcion parseInt convierto el ingreso del usuario
    //en un numero entero para almacenarlo en la cadena de notas ingresadas
    while (isNaN(nota) || nota < 0 || nota > 10) {
    //con este bucle defino el ingreso del ususario entre los números 0-10
        nota = parseInt(prompt("La nota debe ser un número natural menor que 11. Ingrese la nota " + (i + 1) + " nuevamente:"));
        //informo al usuario la condicion del ingreso de las notas
    }
    notas.push(nota);
    //se agregan las notas que cumplen la condicion informada anteriormente
}

var suma = 0;
//iniciamos la variable "suma" en 0
for (var j = 0; j < notas.length; j++) {
//con el bucle "for" recorremos el array "notas" sumando los valores ingresados
    suma += notas[j];
    //la variable "suma" es el resultado de los valores ingresados por el usuario
}
var promedio = suma / notas.length;
//calculamos el "promedio" que resulta de la división de "suma" y "notas.length"

var estado;
//declaramos la variable estado
if (promedio < 5) {
//en esta sentencia evaluamos el "promedio" menor a 5
    estado = "Reprobado";
    //indico el estado de "Reprobado"
} else if (promedio >= 5 && promedio <= 8) {
//en esta sentencia evaluamos si el "promedio" está entre 5 y 8
    estado = "Aprobado";
    //indico el estado de "Aprobado"
} else {
//en esta sentencia vamos a indicar que los valores finales no se encuentran en las 2 sentencias iniciales
    estado = "Sobresaliente";
    //indico el estado de "Sobresaliente"
}

alert("El promedio de las notas es: " + promedio.toFixed(2) + ". El estado del alumno es: " + estado);
//indico con un mensaje emergente el "promedio" de las notas en decimales "(toFixed(2)"" y el "estado" del alumno.
