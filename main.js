const URL_ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all';
let div = document.querySelector('.images');


window.onload = function() {
    let hash = window.location.hash.substring(1);
    //console.log(hash);

    axios
        .get(`https://dog.ceo/api/breed/${hash}/images/random/3`)
        .then(res => {
            res.data.message.forEach(img => {
                let images = document.createElement('img');

                images.src = img;

                div.appendChild(images);
            })
        })
};

function createAllBreeds(dogs) {
    let li = document.createElement('li');

/*
    const dogElement = document.createElement("span");
    dogElement.textContent = dogs;
    dogElement.classList.add("dog-name");
    li.appendChild(dogElement);
*/



    li.classList.add('first-dog-list');


    li.addEventListener('click', function(e) {
        if (!e.target.className.includes("first-dog-list")) {
            return;
        }
        
        let hash = window.location.hash = dogs;
        getDogId(hash);
    });

    //renderImg(li);
    return li;
}



function createAllSubBreeds(dog, li) {
    let div = document.createElement('div');
    div.className = 'style';

    for (let dogs of dog) {

    let li2 = document.createElement('li');

    li2.className = 'newLi';
    li2.textContent = dogs;


    div.appendChild(li2);
    li.appendChild(div);
    //renderImg(null, li2);
    //console.log(dogs)
    li2.addEventListener('click', function(e) {
        //let hash = window.location.hash = dogs;
        //let liText = e.target.parentNode.parentNode.firstChild.nodeValue;
        //let hash2 = window.location.hash = li

        //window.location.hash = e.target.parentNode.parentNode.firstChild.nodeValue + '/' + dogs;
        //window.location.hash = 


        //let a = new String(liText);
        //a.innerText = a;
        //console.log(liText);
        //getSubId(liText, hash);
        //console.log(e.target.parentNode.parentNode.firstChild);
        //console.log(liText);
    })  

    //div.appendChild(li2);
    //li.appendChild(div);
    }
}



function renderAllBreeds(dog) {
let ul = document.querySelector('ul');
ul.innerHTML = "";

//console.log(dog)
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
        //renderSubBreeds(res.data.message);
    });
};



function getDogId(id) {
    axios
        .get(`https://dog.ceo/api/breed/${id}/list`);
};


function getSubId(li, id) {

axios
    .get(`https://dog.ceo/api/breed/${li}/list`)
    .then(res => {
        for (let subs in res.data.message) {
            //console.log(subs);
        }
    })


    axios
        .get(`https://dog.ceo/api/breed/${li}/${id}/images/random/3`)
        .then(res => {
            //console.log(res);
        })

}




function renderImg() {

    document.querySelector('ul').addEventListener('click', e => {
        const el = e.target.querySelector(".first-dog-list");
        //const value = el.textContent;
        //console.log(el);

/*
        if (el === null) {
            return;
        }
*/

        axios
            .get(`https://dog.ceo/api/breed/${el}/images/random/3`)
            .then(res => {
                div.innerHTML = "";

                res.data.message.forEach(links => {
                    let img = document.createElement('img');

                    img.src = links;

                    div.appendChild(img);

                });
            });
    });


};


//getSubId();
let dogsID = window.location.hash;
dogsID = dogsID.substring(1);
getDogId(dogsID);

renderImg();
getAllDogs();



// Jag vill kunna få ut window.location.hash för alla sub-breeds som ligger i createAllSubBreeds()
// Jag vill kunna få bilderna för alla sub-breeds
