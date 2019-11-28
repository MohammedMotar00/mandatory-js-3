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

                li.id = 'li';

                li.textContent = dogs;

                document.querySelector('ul').appendChild(li);

                if (li.innerHTML === 'buhund' || li.innerHTML === 'bulldog' || li.innerHTML === 'bullterrier' || 
                    li.innerHTML === 'cattledog' || li.innerHTML === 'collie' || li.innerHTML === 'corgi' || 
                    li.innerHTML === 'dane' || li.innerHTML === 'deerhound' || li.innerHTML === 'elkhound' ||
                    li.innerHTML === 'frise' || li.innerHTML === 'greyhound' || li.innerHTML === 'hound' || 
                    li.innerHTML === 'mastiff' || li.innerHTML === 'mountain' || li.innerHTML === 'pinscher' ||
                    li.innerHTML === 'pointer' || li.innerHTML === 'poodle' || li.innerHTML === 'retriever' ||
                    li.innerHTML === 'ridgeback' || li.innerHTML === 'schnauzer' || li.innerHTML === 'setter' ||
                    li.innerHTML === 'sheepdog' || li.innerHTML === 'spaniel' || li.innerHTML === 'springer' ||
                    li.innerHTML === 'terrier' || li.innerHTML === 'waterdog' || li.innerHTML === 'wolfhound') {

                        let newDiv = document.createElement('div');
                        newDiv.id = 'style';
                        li.appendChild(newDiv);


                        breeds(dogs, li, newDiv);

                        test(li);
                    };
            };
        })
};



function breeds(dogs, li, div) {
    let newList = li,
        newDiv = div;

    axios
    .get(`https://dog.ceo/api/breed/${dogs}/list`)
    .then(res => {
        
        //console.log(res.data.message);
        console.log(newList);


/*
        for (let i of res.data.message) {
            console.log(i);

            if (newList === 'buhund' || newList === 'bulldog' || newList === 'bullterrier' || 
            newList === 'cattledog' || newList === 'collie' || newList === 'corgi' || 
            newList === 'dane' || newList === 'deerhound' || newList === 'elkhound' ||
            newList === 'frise' || newList === 'greyhound' || newList === 'hound' || 
            newList === 'mastiff' || newList === 'mountain' || newList === 'pinscher' ||
            newList === 'pointer' || newList === 'poodle' || newList === 'retriever' ||
            newList === 'ridgeback' || newList === 'schnauzer' || newList === 'setter' ||
            newList === 'sheepdog' || newList === 'spaniel' || newList === 'springer' ||
            newList === 'terrier' || newList === 'waterdog' || newList === 'wolfhound') {
                let ul = document.createElement('ul'),
                li = document.createElement('li');

                li.textContent = i;
                ul.appendChild(li);

                newDiv.appendChild(ul);
            }
        }
*/
    });


/*
    if (newList === 'buhund' || newList === 'bulldog' || newList === 'bullterrier' || 
        newList === 'cattledog' || newList === 'collie' || newList === 'corgi' || 
        newList === 'dane' || newList === 'deerhound' || newList === 'elkhound' ||
        newList === 'frise' || newList === 'greyhound' || newList === 'hound' || 
        newList === 'mastiff' || newList === 'mountain' || newList === 'pinscher' ||
        newList === 'pointer' || newList === 'poodle' || newList === 'retriever' ||
        newList === 'ridgeback' || newList === 'schnauzer' || newList === 'setter' ||
        newList === 'sheepdog' || newList === 'spaniel' || newList === 'springer' ||
        newList === 'terrier' || newList === 'waterdog' || newList === 'wolfhound') {

            axios
                .get(`https://dog.ceo/api/breed/${newList}/list`)
                .then(res => {
                    let ul = document.createElement('ul'),
                        li = document.createElement('li');

                    li.className = 'newLi';
                    li.textContent = res.data.message;

                    ul.appendChild(li);
                    div.appendChild(ul);
                })
        };
*/
}




function test(li) {
    
}




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
breeds();