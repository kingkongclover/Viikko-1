const dogBreeds = [
    { name: 'Beagle', wikiName: 'Beagle'},
    { name: 'Boxer', wikiName: 'Boxer_(dog_breed)'},
    { name: 'Bouvier', wikiName:'Bouvier_des_Flandres'},
    { name: 'Chow', wikiName: 'Chow_Chow'},
    { name: 'Cockapoo', wikiName: 'Cockapoo'}
];

async function fetchImage(dogBreeds) {
    console.log("Script starts working");
    console.log(dogBreeds);

    const containerDiv = document.querySelector('.container')
    containerDiv.innerHTML = '';

    for (const dogBreed of dogBreeds) {
        const dogApi = `https://dog.ceo/api/breed/${dogBreed.name.toLowerCase()}/images/random`
        const dogInfoApi = `https://en.wikipedia.org/api/rest_v1/page/summary/${dogBreed.wikiName.toLowerCase()}`
        
        const response = await fetch(dogApi);
        const data = await response.json();
        const row = document.createElement('div');

        const response2 = await fetch(dogInfoApi);
        const dataInfo = await response2.json();
        

        row.setAttribute("class", "wiki-item")
        
        console.log(data);

        const img = data.message;
        const text = dataInfo.extract;

        console.log(img);
        console.log(text);

        row.innerHTML = `<h1 class="wiki-header">${dogBreed.name}</h1><div class="wiki-content"><p class="wiki-text">${text}</p><div class="img-container"><img class="wiki-img" src="${img}"></div></div>`
        containerDiv.appendChild(row)
    }
}