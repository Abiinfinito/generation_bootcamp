
function saludar(){
    alert('Hola');
}


/* Manejador de eventos semántico - Buena práctica */
/* Solo una función por evento */
const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento){
    // alert('Hola desde un manejador semántico');
    console.log(evento.target);
}


/* Manejador de eventos múltiple */
/* Muchas funciones al mismo tiempo */
const $botonMultiple = document.getElementById('evento-multiple');

$botonMultiple.addEventListener('click', saludarMultiple );

$botonMultiple.addEventListener('click', function(e){
    console.log(e.target);
})

function saludarMultiple(){
    alert('hola desde manejador múltiple');
}