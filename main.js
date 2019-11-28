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


                        axios
                            .get(`https://dog.ceo/api/breed/${li.textContent}/list`)
                            .then(res => {

                                for (let hund of res.data.message) {

                                    let li2 = document.createElement('li');
                                    li2.textContent = hund;
                                    li.className = 'newLi';
    
                                    newDiv.appendChild(li2);
                                }
                            })

                        //test(li, newDiv, dogs, li.textContent);
                        //breeds(dogs, li.textContent, div)
                        //renderNewLi(li, div);
                    };
            };
        });
}
/*
function test(li, div, dogs, lii) {
    liValue = li.textContent;

    //for (let i = 0; i < liValue.length; i++)



    if (liValue === 'buhund') {
        axios
            .get(`https://dog.ceo/api/breed/${liValue}/list`)
            .then(res => {
                let result = res.data.message;
                let ul = document.createElement('ul'),
                    li2 = document.createElement('li');

                li2.textContent = result;
                li2.className = 'newLi'

                ul.appendChild(li2);
                div.appendChild(ul);
            })
    }




/*
    if (liValue === 'buhund' && liValue === 'bulldog' && liValue === 'bullterrier' && 
        liValue === 'cattledog' && liValue === 'collie' && liValue === 'corgi' && 
        liValue === 'dane' && liValue === 'deerhound' && liValue === 'elkhound' &&
        liValue === 'frise' && liValue === 'greyhound' && liValue === 'hound' && 
        liValue === 'mastiff' && liValue === 'mountain' && liValue === 'pinscher' &&
        liValue === 'pointer' && liValue === 'poodle' && liValue === 'retriever' &&
        liValue === 'ridgeback' && liValue === 'schnauzer' && liValue === 'setter' &&
        liValue === 'sheepdog' && liValue === 'spaniel' && liValue === 'springer' &&
        liValue === 'terrier' && liValue === 'waterdog' && liValue === 'wolfhound') {
            console.log('good');
            axios
                .get(`https://dog.ceo/api/breed/${liValue}/list`)
                .then(res => {
                    let result = res.data.message;
                        let ul = document.createElement('ul'),
                            li2 = document.createElement('li');

                        li2.textContent = result;
                        ul.appendChild(li2);

                        //console.log(div);
                })
        }

}
*/


function breeds(dogs, li, div) {
    let newList = li,
        newDiv = div;
    //console.log(newList)
        //console.log(res.data.message);

        //console.log(document.querySelector('ul').childNodes);
/*
        let ulLi = document.querySelector('ul').childNodes;
        console.log(ulLi[0]);

        for (let i of ulLi) {
            console.log(i);
        }
*/





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
                        let result = res.data.message;
                        //console.log(result);
                        
                        
                    })


                /*
                let ul = document.createElement('ul'),
                    li = document.createElement('li');

                let url = `https://dog.ceo/api/breed/${newList}/list`;
                axios
                .get(url)
                .then(res => {
                    //console.log(res);
                    //if (res.config.url === res.data.message) console.log('good');

                })


                //li.textContent = i;
                //ul.appendChild(li);

                //newDiv.appendChild(ul);
*/
            }



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
};




/*
function test(li, div, dogs, lii) {
    liValue = li.textContent;

    //for (let i = 0; i < liValue.length; i++)



    if (liValue === 'buhund') {
        axios
            .get(`https://dog.ceo/api/breed/${liValue}/list`)
            .then(res => {
                let result = res.data.message;
                //console.log(result);


                for (let m of result) console.log(m);



                let ul = document.createElement('ul'),
                    li2 = document.createElement('li');

                li2.textContent = result;
                li2.className = 'newLi'

                ul.appendChild(li2);
                div.appendChild(ul);
            })

    } else if (liValue === 'bulldog') {
        axios
            .get(`https://dog.ceo/api/breed/${liValue}/list`)
            .then(res => {
                let result = res.data.message;
                let ul = document.createElement('ul'),
                    li2 = document.createElement('li');

                li2.textContent = result;
                li2.className = 'newLi'

                ul.appendChild(li2);
                div.appendChild(ul);
            })
    }
}

*/


renderImg();
//renderNav();
//breeds();