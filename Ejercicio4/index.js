
let nombre = "Octavio";

let apellido = "Fernandez"

let estudiante = `${nombre} ${apellido}`;  //Concatenar Nombre y Apellido.

let nombreMinus = estudiante.toLowerCase(); //Nombre miniscula.

let nombreMayus = estudiante.toUpperCase(); //Nombre MAYUSCULA.

let numeroLetras = estudiante.length;  //Cantidad de letras que tiene la variable "Estudiante".

let firstLetra = nombre.charAt(0);  //Primera letra de Nombre.

let finalLetra = apellido.charAt(8);  //Ultima letra de Apellido.

let quitarEspacios = estudiante.replace(/ /g, "");  //Quitar los espacios de "Estudiante"

let comprobarPalabra = estudiante.includes(nombre);  //Comprobar con True o False.



console.log(comprobarPalabra)

