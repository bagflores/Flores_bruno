class Vehiculo {
    // defino la clase inicial del programa como "Vehiculo"
    constructor(marca, modelo, año) {
      //creo el objeto identificando el constructor con marca, modelo y año
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      //con "this" asigno los valores predeterminados del constructor en "Vehiculo"
    }
    obtenerInformacion() {
      //extraigo los datos de "Vehiculo" para luego ser mostrados por pantalla
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
  }
  
  class Automovil extends Vehiculo {
    //definimos otra clase, la de "vehiculo" definida anteriormente al que le asignamos el nombre de Automovil
    //con "extends" le damos una vinculacion directa a Vehiculo 
    constructor(color, precio, marca, modelo, año) {
      //creo el objeto constructor que identifica los datos en Automovil
      super(marca, modelo, año);
      //con "super" llamamos al "constructor" en "Vehiculo"
      this.color = color;
      this.precio = precio;
      //con "this" asigno los valores color y precio del constructor en Automovil
    }
    obtenerInformacion() {
      //extraigo los datos de Automovil para luego ser mostrados por pantalla
      return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
  }
  
  function validarAño(año) {
  //con esta funcion voy a validar los datos ingresados por el usuario dandole un parametro especifico
    return año >= 2010 && año <= 2030;
  }
  
  let marcaVehiculo = prompt("Ingrese la marca del vehículo:");
  let modeloVehiculo = prompt("Ingrese el modelo del vehículo:");
  let añoVehiculo;
  //con prompt voy a pedirle al usuario que ingrese los datos solicitados de la clase determinada
  do {
    //uso el bucle para que ingrese el año junto con la validacion especificada
    añoVehiculo = parseInt(prompt("Ingrese el año del vehículo (entre 2010 y 2030):"));
    //con parseInt convierto el ingreso del usuario a un número entero para poder ser validado en "if"
    if (!validarAño(añoVehiculo)) {
      alert("El año ingresado no está dentro del rango permitido (2010 - 2030).");
      //en caso de que no sea valido el dato ingresado informo por pantalla al usuario que debe cumplir el requisito
    }
  } while (!validarAño(añoVehiculo));
    //cuando es correctamente validado el dato ingresado va a ser guardado en la clase en la cual me encuentro
  
  const vehiculoIngresado = new Vehiculo(marcaVehiculo, modeloVehiculo, añoVehiculo);
  //creo la variable vehiculoIngresado que contiene los datos proporcionados en el Vehiculo
  
  const colorAutomovil = prompt("Ingrese el color del automóvil:");
  let precioAutomovil;
do {
  //uso el bucle para que ingrese el año junto con la validacion especificada
  precioAutomovil = parseFloat(prompt("Ingrese el precio del automóvil (entre 1 y 30000000):"));
  //con parsefloat convierto el ingreso del usuario a un número con coma para poder ser validado en "if"
  if (isNaN(precioAutomovil) || precioAutomovil < 1 || precioAutomovil > 30000000) {
    alert("El precio ingresado no está dentro del rango permitido (entre 1 y 30000000).");
    //en caso de que no sea valido el dato ingresado informo por pantalla al usuario que debe cumplir el requisito
  }
} while (isNaN(precioAutomovil) || precioAutomovil < 1 || precioAutomovil > 30000000);
  //cuando es correctamente validado el dato ingresado va a ser guardado en la clase en la cual me encuentro

  const automovilIngresado = new Automovil(colorAutomovil, precioAutomovil, marcaVehiculo, modeloVehiculo, añoVehiculo);
  //creo la variable automovilIngresado que contiene los datos proporcionados en el Automovil

  alert("Información del Vehículo:\n" + vehiculoIngresado.obtenerInformacion() + "\n\nInformación del Automóvil:\n" + automovilIngresado.obtenerInformacion());
  //con alert muestro los datos almacenados en automovilIngresado y vehiculoIngresado en diferentes lineas con \n
