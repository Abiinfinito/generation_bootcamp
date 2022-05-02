const $padre = document.querySelector('.padre'); //mando a llamar


//la forma más correcta pa'modificar
const $parr = document.createElement('p'); //nuevo elemento 
$parr.textContent = 'Lorem ipsum';
$parr.textContent += ' Lorem ipsum';
$parr.textContent += ' Lorem ipsum';

$padre.appendChild($parr);

//Agregar elementos con innerHTML
const $cuadro = document.querySelector ('.cuadro');
$cuadro.innerHTML = ''; //inicialización el contenido del elemento

$cuadro.innerHTML = `
                    <a href="#">Este es un enlace</a>
                    <ol>
                       <li>Elemento 1</li>
                       <li>Elemento 2</li>
                       <li>Elemento 3</li>
                    `;



const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

const $lista = document.createElement('ul');

estaciones.forEach(estacion => {
   const $li = document.createElement('li')
   $li.textContent = estacion;
   $lista.appendChild($li);
});

$cuadro.appendChild($lista)
//document.body.appendChild($lista);



///////////////////////////////////////////////////////
const continentes = ['África', 'América', 'Asia', 'Europa', 'Oceanía'];

const $ol = document.createElement('ol');
$cuadro.appendChild($ol);
continentes.forEach(continente =>{$ol.innerHTML += `<li>${continente}</li>`});
