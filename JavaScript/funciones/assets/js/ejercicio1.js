/* EJERCICIO 1 Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"
 */


// Forma 1 compañero equipo 1
let palabra = "Hola mundo"

function voltearPalabra (a) {
    let palabraVolteada = a.split ('').reverse().join('');
    console.log(palabraVolteada);
}

voltearPalabra(palabra);


// Forma 2 yo
const invertirCadena = (cadena ="") => 
(!cadena)
?console.warn("No ingresaste texto")
:console.info(cadena.split("").reverse().join(''))

invertirCadena("Hola Mundo");


//Forma 3 - Raúl
const invertir = (palabra ="") => {
    if (palabra.length <=1 ) return console.warn("No ingresaste texto");
    if (typeof(palabra) !== 'string') return console.error ("El valor ingresado no es una palabra");
    
    let arreglo = palabra.split("");
    let reverso = arreglo.reverse ();
    let unir = reverso.join("");

    return console.log(unir);
}

invertir("Abigail");