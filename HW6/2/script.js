"use strict"

let p = new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        
        resolve(xhr.response);
        
    })
    
    xhr.send();
    
})

p.then(response => {
    var arrForSort = [];
    for (let i = 0; i < response.length; i++) {
        
        arrForSort[i] = response[i].name;
    }
    
    arrForSort.sort();
    
    for (let i = 0; i < arrForSort.length; i++) {
        
        let div = document.createElement('div');
        div.innerHTML = arrForSort[i];
        document.body.appendChild(div);
        
    }
    
})







