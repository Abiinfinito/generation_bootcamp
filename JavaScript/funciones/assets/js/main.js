/* Funciones, nos permiten reutilizar código */

function saludar (nombre = "Fantasma", apellido = "" ){

    // string normal 
    //console.log('Hola, mi nombre es:', nombre, apellido) ; //Di
    // templete Strings - Plantillas literales ` `
    //console.log(`Hola mi nombre es: ${nombre?"Abi":"Desconocido"}`) ; //operador terniario - condicional
    return `Mi nombre es ${nombre} ${apellido}`;
} 

saludar("Abi", "Moreno"); // es la invocacion o llamada de la función - sobreescribe al del primero de fuction - 

let funcionSaludar = saludar('Tamara', 'Cruz');
//console.log(funcionSaludar); //guarde en varibale y luego mande a consola

//console.log(saludar('Silvia', 'Ortiz').toUpperCase()); //desde consola lo hace



/* document.write('<h1> Este es un h1 </h1>');
console.log('<h1> Este es un h1 </h1>'); //lo detecta como un string
console.log(`<h1> Este es un h1 </h1>`);  //plantilla literal */

/*
if (){
    codigo
} else{
    otro codigo 
}
*/



// console.log(funcionSaludar.toLocaleLowerCase());


/* Función declarada, el console log se puede poner donde sea */
function suma (a,b){
    return a + b;
}

console.log(suma (10,20));
/* hoisting */






/* Funciones expresadas | Función expresión, el console log solo abajo */
const resta = function (a,b){
    return a - b;
}

console.log(resta(30,10));


/* setTimeout (()=>{

}, 3000) */


/* Función flecha - no se puede llamar antes - es la más usada :) */ 
const multiplicacion = (a,b) => a * b;
console.log(multiplicacion(40, 5));