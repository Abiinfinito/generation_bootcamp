/* Algunas cosas que podemos hacer con DOM */
/* Propiedades del objeto document */

console.log(window.document);
console.log(document);
console.log(document.head); //regresa el head del documento
console.log(document.body); //regresa el body
console.log(document.documentElement); //regresa todo el HTML
console.log(document.doctype);
console.log(document.charset); //UTF-8
console.log(document.links); //regresa los links
console.log(document.images); //regresa imgs
console.log(document.styleSheets); //regresa los css
console.log(document.scripts); //regresa las etiquetas

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000); //muestra lo que está seleccionando en la página, es un método

document.write("Hola mundo desde document write"); //es como un console.log, pero lo muestra en el body del documento, mala práctica 
document.write("<h2> Hola mundo desde document write</h2>");

