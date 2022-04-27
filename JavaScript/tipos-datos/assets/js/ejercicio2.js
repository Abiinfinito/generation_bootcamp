/* Archivo JSON */

const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografia", "leer"], 
}

const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiempos: ["Cine", "Musica", "Baile"],
  };

  const Mitzi = {
    nombreCompleto: {
        nombre: "Mitzi",
        apellido: "Hernandez"
    },
    edad: 23,
    pasatiempos: ["jugar", "dibujar", "ver series"],
}

const DaniP = {
    nombreCompleto: {
        nombre: "Daniel",
        apellido: "Perez",
    },
    edad: 24,
    pasatiempos: ["fotografia", "peliculas", "leer"],
}

const Arantxa = { 
    nombreCompleto: {
    nombre: "Arantxa", 
    apellido: "Perez"
    },
    edad: 26,
    pasatiempos: ["caminar", "patinar", "musica"],
}

const Sesai = {
    nombreCompleto :{
        nombre: "Sesai",
        apellido: "Cazares",
        },
        edad: 25,
        pasatiempos: ["fotografia","caminar","dibujar"],
}

const manuManito = {
    nombreCompleto :{
        nombre: "Manuel Adán",
        apellido: "Carrillo Zavala",
    },
    edad: 29,
    pasatiempos: ['Leer', 'Tomar cafécito', 'Estar en casa', 'Echar chismecito'],
}



const cohorte12 = [Abi, Katia, Mitzi, DaniP, Arantxa, Sesai,manuManito]

for(let i=0; i<cohorte12.length; i++){
    console.log(cohorte12[i]);
}

for(let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.includes("fotografia")){
        console.log(cohorte12[i].nombreCompleto.nombre);
    }
    
}


