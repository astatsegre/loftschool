"use strict"
let input = document.querySelector('input'),
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
    
});

input.addEventListener('input', () => {
    
    let inputValue = input.value;
    
    for (let i = 2; i < (document.body.children.length); i++) {
        let currentCity = document.body.children[i].innerHTML;
        if (currentCity.toLowerCase().indexOf(inputValue.toLowerCase()) != -1) {
            document.body.children[i].style.display='block';
        } else {
            document.body.children[i].style.display='none';
        }
    }
    
    
    console.log(inputValue);
    console.log(document.body.children[2].innerHTML);
})






