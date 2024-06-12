var valores = [true, false, 2, "hola", "mundo", 3, "char"];
//vamos a filtrar "elementos" del array, utilizando el filter(es un arreglo, que filtra los elementos y los devuelve 
//en algún momento que tambien devuelve el segundo argumento). Esto crea un array "elementos", contiene los elementos
//de texto.
var elementos = valores.filter(function(valor) {
    return typeof valor === "string";
});
//determino cual de los “elementos de texto” es mayor, es decir el que contenga mas letras.

var elementoMayor = elementos.reduce(function(a, b) {
    return a.length > b.length ? a : b;
}, "");
//Utilizo reduce en el array elementos para encontrar el elemento de texto con mas letras. Esta funcion va a comparar
//la longitud de los elementos de texto y devuelve el que tenga mas letras.

var resultadoHtml = "<h2>El elemento de texto con más letras es: " + elementoMayor + "</h2>";
//En esta linea, creo una cadena HTML que tiene el elemento con mas letras.

var ordenadosPorLongitud = elementos.slice().sort(function(a, b) {
    return a.length - b.length;
});
//el .slice hace una copia del array elementos y el sort ordena por longitud de texto, de menor a mayor la copia hecha.

console.log("El elemento de texto con más letras es: " + elementoMayor);
//muestro la lista de elementos el de mayor longitud.

var ordenadosLongitud = elementosTexto.slice().sort(function(a, b) {
    return a.length - b.length;
    //con slice creamos una "copia del array" para poder modificarlo sin modificar la base
    //ordenamos por longitud el texto arriba definido
});

console.log("Elementos de texto ordenados por longitud: " + ordenadosLongitud.join(", "));
//muestro la lista de elementos ordenados por longitud.

var numeros = valores.filter(function(valor) {
    return typeof valor === "numero";
    //creo el array numeros solo los elementos numerico para poder ser filtrados
});

var numeros = valores.filter(function(valor) {
    return typeof valor === "numero";
});
//Utilizo el "numero" con el filter y crea un nuevo array "numeros" y tiene los elementos numericos.
//determino el resultado de las cuatro operaciones matematicas basicas (suma, resta, multiplicacion y division) realizadas con los dos elementos numericos

var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];
//Uso "var" y las operaciones matematicas basicas.

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
//muestro los resultados de las operaciones matematicas.
