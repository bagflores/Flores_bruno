let dato, resultado;
//declaramos variables
val1 = window.prompt("Introduce tu nombre", "...");
//mediante una ventana emergente solicitamos introducir "x" dato que se almacena en va1
val2 = window.prompt("Introduce tu apellido", "...");
//mediante una ventana emergente solicitamos introducir "x" dato que se almacena en va2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//se unifican los datos ingresados por el usuario en los dos pasos anteriores almacenandolos en resultado
document.write(resultado);
//mostramos en el documento HTML que creamos el "resultado"