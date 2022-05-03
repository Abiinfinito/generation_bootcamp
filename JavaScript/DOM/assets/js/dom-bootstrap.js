const db = [
    {
    url:'https://placeimg.com/200/200/animals',
    title: 'Animales', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
},
{
    url:'https://placeimg.com/200/200/tech',
    title: 'Tecnología', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
},
{
    url:'https://placeimg.com/200/200/people',
    title: 'Personas', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
},
{
    url:'https://placeimg.com/200/200/nature',
    title: 'Naturaleza', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
},
{
    url:'https://placeimg.com/200/200/arch',
    title: 'Arquitectura', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
},
{
    url:'https://placeimg.com/200/200/animals',
    title: 'Animales', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!'
}
];


const $cards = document.getElementById('cards');
$cards.innerHTML = '';

db.forEach(objeto => {
    $cards.innerHTML += `
    <div class="col mb-4">
    <div class="card">
      <img src="${objeto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text">${objeto.description}</p>
      </div>
    </div>
  </div>
    `;
});



console.log(db);

//JSON 
//stringify - convertir un objeto JSON a un string

const dbJSON = JSON.stringify(db);
console.log(dbJSON);

//convertir nuevamente a JSON - parse para hacer JSON desde una cadena de texto
console.log(JSON.parse(dbJSON))