const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form")
//console.log(formulario);

const inputs = document.querySelectorAll("input")
//console.log(inputs); //forma rápida

const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telefonoError = document.querySelector("#errorTelefono");

/* console.log(telefonoError); */

const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false,
}

inputs.forEach((inp)=>{
	//console.log(inp);
	inp.addEventListener("keyup",(e)=>{
		//console.log(e.target.name);

        
		switch (e.target.name) {
			case "nombre":
				//console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					
					nombreError.textContent = ""
				}
				else{
					console.log("Nombre incorrecto");
					nombreError.textContent = "Error"
				}

				break;

			case "apellido":
				if(expresiones.nombre.test(e.target.value)){
					
					apellidoError.textContent = ""
				}
				else{
					console.log("Apellido incorrecto");
					apellidoError.textContent = "Error"
				}

				break;
			
			case "email":
				if(expresiones.email.test(e.target.value)){
					
					emailError.textContent = ""
				}
				else{
					console.log("Email incorrecto");
					emailError.textContent = "Error"
				}

				break;

			case "password":
				if(expresiones.password.test(e.target.value)){
					
					passwordError.textContent = ""
				}
				else{
					
					passwordError.textContent = "Error"
				}

				break;
				
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					
					telefonoError.textContent = ""
				}
				else{
					
					telefonoError.textContent = "Error"
				}

				break;
		
		}
	})
} )

formulario.addEventListener("submit",(e)=>{
	e.preventDefault()
	console.log("Enviado");
})

