// Objeto, objetos tienen métodos y atributos

const nombre = "Abi";
const nombre2 = new String("Diana");

//Forma antigua de declarar un objeto
const persona = new Object();
persona.nombre = "Abi"
persona.apellido = "Moreno"
persona.edad = "23"

console.log(persona);



//Forma más ocupada actualmente, los rojos son propiedad-atributo, azul con una función es un método
const nuevaPersona = {
    /* atributos o propiedades, tiene info, datos, arreglos */
    nombreCompleto:{
        nombre: "Diana Abigail",
        apellido: "Moreno Cruz"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
    tieneTrabajo: true, 
    /* método, lleva paréntesis siempre */
    saludar: function (){
        console.log("Bonjour");
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1 + n2}`);
    }
}

"Bonjour".length /* atributo o propiedad */
"Bonjour".toLocaleLowerCase() /* método */

console.log(nuevaPersona.edad); /* atributo */
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[0]); /* es arreglo */

nuevaPersona.saludar(); /* método */
nuevaPersona.sumar(5,10);

/* Para cambiar el valor, se sobreescribe */
nuevaPersona.edad = 15
console.log(nuevaPersona.edad);

/* Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Verde"
console.log(nuevaPersona.colorFavorito);

/* console.log(nuevaPersona.hasOwnProperaty("edades")) */

console.log(Object.keys(nuevaPersona))
console.log(Object.values(nuevaPersona))



