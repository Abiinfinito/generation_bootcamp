/* Ejercicio 1 */
year = prompt ("¿En qué año naciste")
console.log(`Tienes ${2022-year} años`);


/* Ejercicio 2 */
var boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    let year = document.getElementById('year').value;
    console.log(`Tienes ${2022-year} años`);
});

