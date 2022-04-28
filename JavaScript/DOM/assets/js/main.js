/* este es un nodo de comentario */
//es cualquier etiqueta del html y que pueden ser modificadas por js con eventos 
//el signo de dolar $ es para identificar o declarar una variable que va a contener adentro algo de html
//poner los elementos hasta el principios const $...

const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p'); //llamar una parte del documento
const $card = document.querySelector ('.card');

console.log($parr);


//nodeName
console.log($parr.nodeName); //nodeName muestra el nombre del nodo
console.log($titulo.nodeName);


//textContent - utilizar estaaaa
$parr.textContent += "Hola Mundo !"; //sobre escribe en la página
console.log($parr.textContent);
$titulo.textContent = "Modificiando elementos con JS"


//innerText - no usar rip


//innerHTML agrega elemntos htmml dentro de un ellemtno que estemos especificando
console.log($parr.innerHTML);
$parr.innerHTML = '<a href="#">Este es un enlace</a>'; //solo reemplaza lo que hay adentro del elemento seleccionado


//outerHTML
//$parr.outerHTML = '<a href="#">Este es un enlace</a>'; //es como innerHTML solo que aqui reemplaza todoooo, incluido el elelemnto seleccionado


// Crear elementos de html 
 console.log(document);

 function crearElemento(){
     const img = document.createElement('img');
     img.src = "https://heraldodemexico.com.mx/u/fotografias/m/2019/8/29/f850x638-141498_218987_5050.jpg"
     
     //appendChild permite hacer uso de los elementos creados
     $card.appendChild(img);
 }

 crearElemento();