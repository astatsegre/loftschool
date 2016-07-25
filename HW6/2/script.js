"use strict"

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
xhr.addEventListener('load', () => {
    console.log(xhr.responseText);
})
xhr.send();


//for (let i = 0; i < responseTe)
