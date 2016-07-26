"use strict"

//
//let downloadCities = function() {
//    return 
let p = new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        console.log(xhr.response);
        resolve(xhr.response);
    })
    xhr.send();
    })

p.then(response => {
    var arrForSort = [];
    for (let i = 0; i < response.length; i++) {
        
        arrForSort[i] = response[i].name;

        
//        let div = document.createElement('div');
//        div.innerHTML = response[i].name;
//        document.body.appendChild(div);
    }
    console.log(arrForSort);
    arrForSort.sort();
    console.log(arrForSort);
    
})

//}






