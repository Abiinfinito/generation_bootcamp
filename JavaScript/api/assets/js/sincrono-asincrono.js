//no bloqueante
//promesas es un valor del fituro que puede o no puede pasar
/* let tiempo = 5000
let datos
setTimeout(()=>{
    datos = 'Abi'
    console.log(datos);
},tiempo )

console.log(datos);
console.log('Holis'); */


const datos = [
    {
        nombre: "Abi",
        edad: 23,
    },
    {
        nombre: "Tamara",
        edad: 18,
    },
    {
        nombre: "Luis",
        edad: 16,
    }
]

//asincrono
function obtenerDatos(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (datos)
        },3000)
    })
}

obtenerDatos().then((datos)=>{
    console.log(datos);
})

async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}

obtenerDatosAsync()