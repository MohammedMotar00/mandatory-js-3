const URL_ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all';
let divImg = document.querySelector('.images');

/*
window.onload = function() {
    let hash = window.location.hash.substring(1);

    axios
        .get(`https://dog.ceo/api/breed/${hash}/images/random/3`)
        .then(res => {
            res.data.message.forEach(img => {
                let images = document.createElement('img');

                images.src = img;

                divImg.appendChild(images);
            });
        });
};
*/


window.onload = function() {
    //let hash = window.location.hash.substring(1);

    if (window.location.hash.includes('-')) {
        let myHash = window.location.hash.substring(1);

        let hash0 = myHash.split("-")[0];
        let hash1 = myHash.split("-")[1];

        axios
            .get(`https://dog.ceo/api/breed/${hash0}/${hash1}/images/random/3`)
            .then(res => {
                res.data.message.forEach(img => {
                    let images = document.createElement('img');

                    images.src = img;

                    divImg.appendChild(images);
                });
            });
    } else {
        let hash = window.location.hash.substring(1);

        axios
            .get(`https://dog.ceo/api/breed/${hash}/images/random/3`)
            .then(res => {
                res.data.message.forEach(img => {
                    let images = document.createElement('img');

                    images.src = img;

                    divImg.appendChild(images);
                });
            });
    };
};



function createAllBreeds(dogs) {
let dogDiv = document.createElement('div'),
    li = document.createElement('li');

dogDiv.classList.add('div-container');
li.classList.add('first-dog-list');
li.innerHTML = dogs;

dogDiv.appendChild(li);

renderImg(li);

li.addEventListener('click', function() {
    let hash = window.location.hash = dogs;
    getDogId(hash);
});

return dogDiv;
}



function createAllSubBreeds(dog, div, id) {
let subDiv = document.createElement('div');
//console.log(id);
for (let dogs of dog) {

    let li = document.createElement('li');

    li.classList.add('newLi');
    li.innerHTML = dogs;

    subDiv.appendChild(li);
    div.appendChild(subDiv);

    renderSubImg(li);

    li.addEventListener('click', function() {
        let hash = window.location.hash = dogs;

    });
};
};



function renderAllBreeds(dog) {
    let ul = document.querySelector('ul');
    ul.innerHTML = "";

    for (let dogs in dog) {
        let createdDogs = createAllBreeds(dogs);
        //renderImg(createdDogs);

        ul.appendChild(createdDogs);


    if (dogs === 'buhund' || dogs === 'bulldog' || dogs === 'bullterrier' || 
        dogs === 'cattledog' || dogs === 'collie' || dogs === 'corgi' || 
        dogs === 'dane' || dogs === 'deerhound' || dogs === 'elkhound' ||
        dogs === 'frise' || dogs === 'greyhound' || dogs === 'hound' || 
        dogs === 'mastiff' || dogs === 'mountain' || dogs === 'pinscher' ||
        dogs === 'pointer' || dogs === 'poodle' || dogs === 'retriever' ||
        dogs === 'ridgeback' || dogs === 'schnauzer' || dogs === 'setter' ||
        dogs === 'sheepdog' || dogs === 'spaniel' || dogs === 'springer' ||
        dogs === 'terrier' || dogs === 'waterdog' || dogs === 'wolfhound') {

        axios
            .get(`https://dog.ceo/api/breed/${dogs}/list`)
            .then(res => {

                let dog = res.data.message;

                createAllSubBreeds(dog, createdDogs);
            });
        };
    };
};



function getAllDogs() {
    axios
        .get(URL_ALL_BREEDS)
        .then(res => {
            renderAllBreeds(res.data.message);
        });
};



function getDogId(id) {
    axios
        .get(`https://dog.ceo/api/breed/${id}/list`);
};


function getDogSubId(value1, value2) {
    //console.log(value1);
    //console.log(value2);
    axios
        .get(`https://dog.ceo/api/breed/${value1}/list`)
        .then(res => {
            //value2 = res;
            for (let i of res.data.message) {
                if (i === value2) {
                    value2 = i;
                    window.location.hash = `${value1}-${value2}`;
                }
            }
/*
            value2 = res.data.message;
            window.location.hash = `${value1}-${value2}`;
*/
        })
};



function renderImg(dogLi) {
let li = dogLi;

li.addEventListener('click', function(e) {
    let value = e.target.textContent;

    axios
        .get(`https://dog.ceo/api/breed/${value}/images/random/3`)
        .then(res => {
            divImg.innerHTML = "";

            res.data.message.forEach(links => {
                let img = document.createElement('img');

                img.src = links;

                divImg.appendChild(img);
            });
        });
});
};

//document.querySelector('ul').parentElement

function renderSubImg(subLi) {
let li = subLi;

li.addEventListener('click', function(e) {
    let value1 = e.target.parentElement.parentElement.firstChild.textContent;
    let value2 = e.target.textContent;

    getDogSubId(value1, value2);
    axios
        .get(`https://dog.ceo/api/breed/${value1}/${value2}/images/random/3`)
        .then(res => {
            divImg.innerHTML = "";

            res.data.message.forEach(links => {
                let img = document.createElement('img');

                img.src = links;

                divImg.appendChild(img);
            });
        });
});
};


getAllDogs();
renderAllBreeds();