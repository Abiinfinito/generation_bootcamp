const $card = document.querySelector ('.card');
const $form = document.querySelector ('form');

$form.addEventListener('submit',(e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )

    //console.log(datos.url); //el . nos permite acceder a un elemento

    crearElemento(datos.url, datos.texto);
    $form.reset();

} );




function crearElemento(url, texto){
    const img = document.createElement('img');
    const txt = document.createElement('figcaption');
    img.src = url;
    img.alt = texto;

    txt.textContent = texto;
    
    //appendChild permite hacer uso de los elementos creados
    $card.appendChild(img);
    $card.appendChild(txt);
}

