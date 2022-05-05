class Persona{
    //atributos 
    #id = 0;
    static #contador = 0;
    #nombre = ''; // # hace una variable privada
    #edad = 0;
    #correo = '';

    constructor(nombre, edad, correo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id =++ Persona.#contador; //valor modificado con otro valor con propiedad que pertenece a la clase 
    } 

    //setters  &  getters 
    //set  &  get
    //fijar  &  obtener
    //se usan y se llaman como si fueran atributos

    get getNombre(){
        return this.#nombre;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }


    get getEdad(){
        return this.#edad;
    }

    set setEdad(edad){
        this.#edad = edad;
    }


    get getCorreo(){
        return this.#correo;
    }

    set setCorreo(correo){
        this.#correo = correo;
    }


    //métodos
    //también pueden ser privados, audera de la clase no se puede tener acceso
    cambiarNombre(nombre){
        this.#nombre = nombre;
    }

    //ptivado
    #saludar(){
        let mensaje = `Hola mi nombre es ${this.#nombre}`;
        return mensaje;
    }

    mostrarSaludo(){
        return this.#saludar();
    }

    static mostrarContador(){
        return Persona.#contador;
    }

}

//instancia de la clase persona 
const persona1 = new Persona('Abi', 23, 'abi@gmail.com');
const persona2 = new Persona('Tam', 30, 'tam@gmail.com');
const persona3 = new Persona('Lu', 16, 'lu@gmail.com');

persona1.setNombre = 'Silvia'

persona1.cambiarNombre('Yoky')

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

/* console.log(Persona.contador); */
console.log(Persona.mostrarContador());




/* persona1.#nombre = 'abc'
console.log(persona1); */