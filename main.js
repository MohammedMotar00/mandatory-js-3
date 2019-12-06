//  Hämtar Api länk och querySelector min div som kommer vara parent för mina bilder!
const URL_ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all';
let divImg = document.querySelector('.images');



// när jag laddar om sidan så ska den kunna läsa av window.location.hash och från den rendera bilder
window.onload = () => {
    if (window.location.hash.includes('-')) {
        let myHash = window.location.hash.substring(1);

        let hash0 = myHash.split("-")[0];
        let hash1 = myHash.split("-")[1];

        message(`${hash0} ${hash1}`);

        axios
            .get(`https://dog.ceo/api/breed/${hash0}/${hash1}/images/random/3`)
            .then(res => {
                res.data.message.forEach(img => {
                    let images = document.createElement('img');

                    images.src = img;

                    divImg.appendChild(images);
                });
            });

    } else if (window.location.hash) {
        let hash = window.location.hash.substring(1);

        message(`${hash}`);

        axios
            .get(`https://dog.ceo/api/breed/${hash}/images/random/3`)
            .then(res => {
                res.data.message.forEach(img => {
                    let images = document.createElement('img');
                    console.log(img)
                    images.src = img;

                    divImg.appendChild(images);
                });
            });

    } else {
        message('Random hundar');

        axios
            .get(`https://dog.ceo/api/breeds/image/random/3`)
            .then(res => {
                res.data.message.forEach(img => {
                    let images = document.createElement('img');

                    //console.log(img)

                    images.src = img;

                    divImg.appendChild(images);
                });
            });
    }
}




// skapar breeds
function createAllBreeds(dogs) {
    let dogDiv = document.createElement('div'),
        li = document.createElement('li');

    dogDiv.classList.add('breed-container');
    li.classList.add('breed-dogs');
    li.innerHTML = dogs;

    dogDiv.appendChild(li);

    renderImg(li);

    li.addEventListener('click', () => {
        let hash = window.location.hash = dogs;
        getDogId(hash);
    });

    return dogDiv;
}




//skapar sub-Breeeds
function createAllSubBreeds(dog, div) {
    let subBreedDiv = document.createElement('div');

    for (let dogs of dog) {
        let li = document.createElement('li');

        subBreedDiv.classList.add('subBreedDiv')
        li.classList.add('sub-breed-li');
        li.innerHTML = dogs;

        subBreedDiv.appendChild(li);
        div.appendChild(subBreedDiv);

        renderSubBreedImg(li);
    }
}




// renderar breeds till DOM
function render(dog) {
    let ul = document.querySelector('ul');
    ul.innerHTML = "";


    for (let dogs in dog) {
        let createdDogs = createAllBreeds(dogs);
        ul.appendChild(createdDogs);


        if (dog[dogs].length > 0) {
            axios
                .get(`https://dog.ceo/api/breed/${dogs}/list`)
                .then(res => {
                    let dog = res.data.message;

                    createAllSubBreeds(dog, createdDogs);
                });
        }
    }
}




// hämtar ut alla hundar
function getAllDogs() {
    axios
        .get(URL_ALL_BREEDS)
        .then(res => {
            render(res.data.message);
        });
}




// denna funktionen kopplas till createAllBreeds() och nyttan är att få window.location.hash
// denna hash är enbart för breeds
function getDogId(id) {
    axios
        .get(`https://dog.ceo/api/breed/${id}/list`);
}




// denna funktionen är samma sak som getDogId()
//fast här är då hash för sub-breeds och kopplas med  --> renderSubImg()
function getDogSubBreedId(value1, value2) {
    axios
        .get(`https://dog.ceo/api/breed/${value1}/list`)
        .then(res => {
            for (let i of res.data.message) {
                if (i === value2) {
                    value2 = i;
                    window.location.hash = `${value1}-${value2}`;
                }
            }
        });
}




// renderar bilderna för breeds när jag klickar på en av breeds <li>
function renderImg(breed) {
    let li = breed;

    li.addEventListener('click', e => {
        let value = e.target.textContent;

        message(value);

        axios
            .get(`https://dog.ceo/api/breed/${value}/images/random/3`)
            .then(res => {
                divImg.innerHTML = "";

                res.data.message.forEach(images => {
                    let img = document.createElement('img');

                    img.src = images;

                    divImg.appendChild(img);
                })
            });
    });
}




// Renderar subBreed bilderna när man klickar på en av subBreeds <li>
function renderSubBreedImg(subBreed) {
    let li = subBreed;

    li.addEventListener('click', e => {
        let value1 = e.target.parentElement.parentElement.firstChild.textContent,
            value2 = e.target.textContent;


        message(`${value1} ${value2}`);


        // jag vill hämta value1 och value2 till min getDogSubBreedId() så jag kan lägga ut hash.
        getDogSubBreedId(value1, value2);


        axios
        .get(`https://dog.ceo/api/breed/${value1}/${value2}/images/random/3`)
        .then(res => {
            divImg.innerHTML = "";

            res.data.message.forEach(images => {
                let img = document.createElement('img');

                img.src = images;

                divImg.appendChild(img);
            });
        });
    })
}




// funktion refreshButton()  --> när jag klickar på button, så ska bilderna uppdateras
function refreshButton() {
    const btn = document.getElementById('random-dog');

    btn.addEventListener('click', () => {
        divImg.innerHTML = "";

        if (window.location.hash.includes('-')) {
            let myHash = window.location.hash.substring(1);
    
            let hash0 = myHash.split("-")[0];
            let hash1 = myHash.split("-")[1];
    
            message(`${hash0} ${hash1}`);
    
            axios
                .get(`https://dog.ceo/api/breed/${hash0}/${hash1}/images/random/3`)
                .then(res => {
                    divImg.innerHTML = "";
                    res.data.message.forEach(img => {
                        let images = document.createElement('img');
    
                        images.src = img;
    
                        divImg.appendChild(images);
                    });
                });
    
        } else if (window.location.hash) {
            let hash = window.location.hash.substring(1);
    
            message(`${hash}`);
    
            axios
                .get(`https://dog.ceo/api/breed/${hash}/images/random/3`)
                .then(res => {
                    divImg.innerHTML = "";
                    res.data.message.forEach(img => {
                        let images = document.createElement('img');
    
                        images.src = img;
    
                        divImg.appendChild(images);
                    });
                });
    
        } else {
            message('Random hundar');
    
            axios
                .get(`https://dog.ceo/api/breeds/image/random/3`)
                .then(res => {
                    divImg.innerHTML = "";
                    res.data.message.forEach(img => {
                        let images = document.createElement('img');
    
                        images.src = img;
    
                        divImg.appendChild(images);
                    });
                });
        };
    })
}



// function message() kommer visa mig vilken sorts hund det är
function message(msg) {
    document.querySelector('.dogType').innerHTML = msg;
}




refreshButton();
getAllDogs();
render();