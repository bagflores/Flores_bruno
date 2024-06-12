var texto = prompt("Introduce un texto:");
//solicito al usuario que ingrese un texto por teclado mediante una ventana emergente

var textoMinusculas = texto.toLowerCase();
//el texto ingresado lo transformo en minúsculas a los fines de comparar las vocales

var vocales = ['a', 'e', 'i', 'o', 'u'];
//defino las vocales

var posicionPrimeraVocal = -1;
//le doy un lugar a la primer vocal en la posicion 1

for (var i = 0; i < textoMinusculas.length; i++) {
    //con el bucle for voy a recorrer el texto a los fines de ubicar la primer vocal
    if (vocales.includes(textoMinusculas[i])) {
        //con la sentencia "if" y la "i" recorriendo el array por el bucle hasta encontrar la vocal
        posicionPrimeraVocal = i + 1; 
        //le asigno la suma de 1 para que las posiciones comiencen en 1 y no 0
        break;
        //con la instruccion break, se para el bucle al encontrar la primera vocal
    }
}


if (posicionPrimeraVocal !== -1) {
    //con la sentencia "if" verificamos si "posicionPrimeraVocal" es diferente de -1 (que es el inicio del bucle normal)
    alert("La primera vocal en el texto es '" + texto[posicionPrimeraVocal - 1] + "' en la posición Nº" + posicionPrimeraVocal);
    //con alert indicamos con un mensaje la posicion de la vocal ubicada
} else {
//con else indicamos que la sentencia if no se cumplio
    alert("No se encontraron vocales en el texto.");
    //con alert indicamos con un mensaje que no se cumplio el if
}