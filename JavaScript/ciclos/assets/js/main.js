/* Ciclos */

// for
// for ...in
// .forEach


//imprimir la frase "hola mundo" 10 veces
//(inicializamos la variable "i"; condición; modificador del contador i++ sumar de uno en uno)
//siempre fijarnos en la condición y un modificador, para que sea finito
//ITERACIÓN cada vuelta que da el ciclo
//for (let i=1; i <=10; i++){
    //console.log('Hola mundo', i);
    //debugger; //es una herramienta que tienen los navegadores
//}

//for tiene un limite de iteraciones while mientras la condición se cumpla, seguirá ejecutando

//while

//let control = 1; //como i - variable de control

//while (control <=5) { //condición a observar

    //console.log('Hola desde un ciclo while', control);

    //control++; //modificador de la variable no es necesario como en for

    //debugger;
//}



//do...while
//entonces en do while primero se ejecuta la sentencia y después se evalua - El Do while pega y después pregunta


let i = 6;
do {
    console.log('hola desde un do...while',i);
    i++
} while (i <= 5);