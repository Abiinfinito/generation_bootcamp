const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const container = document.getElementById("card-container");


fetch(url).then(resp=> resp.json()).then(datos =>{
    const arreglo = datos;
    arreglo.forEach(element => {
        console.log(element);
        
        const template = 
        `<div class="col mb-4">
            <div class="card">
            <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${element.title}</p>
            </div>
            </div>
        </div>`;
        container.innerHTML += template;
        
    });

})

