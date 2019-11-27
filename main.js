let div = document.querySelector('.images');

window.onload = () => {
    axios
        .get('https://dog.ceo/api/breeds/image/random/3')
        .then(res => {
            res.data.message.forEach(img => {
                let images = document.createElement('img');
                images.src = img;
                div.appendChild(images);
            })
        })
}




function renderNav() {
    const urlDogs = 'https://dog.ceo/api/breeds/list/all';

    axios
        .get(urlDogs)
        .then(res => {
            //console.log(res.data.message);

            for (let dogs in res.data.message) {
                let li = document.createElement('li');

                li.textContent = dogs;
                document.querySelector('ul').appendChild(li);
            };
        })
};


function renderImg() {

    $('ul').on('click', e => {

        let value = e.target.textContent;


        axios
            .get(`https://dog.ceo/api/breed/${value}/images/random/3`)
            .then(res => {
                div.innerHTML = "";
                res.data.message.forEach(links => {
                    let img = document.createElement('img');

                    img.src = links;

                    div.appendChild(img);
                });
            });

    })
}

renderImg();
renderNav();




function test () {
    $('ul').on('click', e => {

        let value = e.target.textContent;

        if (value === 'buhund' || value === 'bulldog' || value === 'bullterrier' || value === 'cattledog' || 
            value === 'collie' || value === 'corgi' || value === 'dane' || value === 'deerhound' ||
            value === 'elkhound' || value === 'frise' || value === 'greyhound' || value === 'hound' || 
            value === 'mastiff' || value === 'mountain' || value === 'pinscher' ||
            value === 'pointer' || value === 'poodle' || value === 'retriever' || value === 'ridgeback' || 
            value === 'schnauzer' || value === 'setter' || value === 'sheepdog' ||
            value === 'spaniel' || value === 'springer' || value === 'terrier' || value === 'waterdog' || 
            value === 'wolfhound') {

                console.log('good');
            };


        axios
        .get(`https://dog.ceo/api/breed/${value}/images/random/3`)
        .then(res => {

        })
    })
}

test();