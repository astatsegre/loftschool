"use strict"
let results = document.getElementById('results'),
    input = document.querySelector('input'),
    p = new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        
        resolve(xhr.response);
        
    })
    
    xhr.send();
    
});


p.then(response => {
    
    console.log(response);
    response.sort( (a, b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
    });
    console.log(response);

    let source = document.getElementById('cityTemplate').innerHTML,
        templateFn = Handlebars.compile(source),
        template = templateFn({city: response});
    
    results.innerHTML = template;
});


input.addEventListener('input', () => {
    
    let inputValue = input.value;
    
    for (let i = 0; i < (results.children.length); i++) {
        let currentCity = results.children[i].innerHTML;
        if (currentCity.toLowerCase().indexOf(inputValue.toLowerCase()) != -1) {
            results.children[i].style.display='block';
        } else {
            results.children[i].style.display='none';
        }
    }
})






