/* 1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (palabra = "")=> {
    palabra = palabra.toLocaleLowerCase();
    let alreves = palabra.split("").reverse().join("");

    return (palabra===alreves)
    ? console.log(`Sí es palíndromo, Palabra original ${palabra}, Palabra alrevés ${alreves}`)
    :console.log(`No es palíndromo, Palabra original ${palabra}, Palabra alrevés ${alreves}`)
}

palindromo ("Hola Mundo")



/* 2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (texto="", veces=undefined)=>{
    if (!texto) return console.warn ("No ingresaste un texto");
    if (veces===0) return console.error ("El número de veces no puede ser 0");
    if (Math.sign(veces)===-1)return console.error("El número de veces no puede ser negativo");
    for (let i=1;i <= veces; i++) console.log(`${texto},${i}`)
}

repetirTexto ("Hola Mundo", 3)



/* 3- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const recortarCadena = (cadena ="", longitud = undefined)=>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:console.log(cadena.slice(0,longitud));

recortarCadena("Hola Mundo", 4);



/* 4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero=undefined)=>{
    if (numero === 0)return console.error("El número no puede ser 0");
    let factorial=1;
    for (let i=numero;i>1;i--){
        factorial *=i;
    }
    return console.log(`El factorial de ${numero} es ${factorial}`);
}

factorial (5);



/* ejercio 1 */
/* function palindromo(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromo("hola")); */ // es palindromo
/*  ejericio 2 */
/*  function repetir(cadena){
        let cadenaRepetida = cadena.repeat(3);
        console.log(cadenaRepetida);
    }
 repetir(" hola mundo "); */
/*  ejercicio 3 */
/* let cadena ="hola mundo"

function cortarcadena(cadena, numero){

    let extraida = cadena.substring(0, numero);
    console.log(extraida);
}
cortarcadena(cadena , 6) */
/* ejericio 4 */
/* const factorial = (numero=undefined)=>{
    if (numero === 0)return console.error("El número no puede ser 0");
    let factorial=1;
    for (let i=numero;i>1;i--){
        factorial *=i;
    }
    return console.log(`El factorial de ${numero} es ${factorial}`);
}
factorial (5); */
