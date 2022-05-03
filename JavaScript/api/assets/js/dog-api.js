const url = "https://dog.ceo/api/breeds/image/random"
const imagen = document.getElementById("imagenPerrito")
const imagen2 = document.getElementById("imagenPerrito2")

//petición js con fetch y da como resultado una promesa
fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    //console.log(datos);
    imagen.src = datos.message
})


//await espera una promesa
//método json es una promesa
//función async y await 
async function obtenerPerrito(){
    const infoPerritos = await fetch(url)
    //console.log(infoPerritos);
    const perrito = await infoPerritos.json()
    console.log(perrito);
    imagen2.src = perrito.message
}
obtenerPerrito()