"use strict"

document.cookie = "city=saint-p;";
document.cookie = "age=24;";
document.cookie = "sex=male";
document.cookie = "country=russia";


let cookies = document.cookie.split(';'),
    cookieName = [],
    cookieValue = [];

cookies.forEach( (item, i, arr) => {
    let splitedItem = item.split('=');
    cookieName[i] = splitedItem[0];
    cookieValue[i] = splitedItem[1];
})

let fragment = document.createDocumentFragment(),
    table = document.querySelector('table');

for (let i = 0; i < cookieName.length; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${cookieName[i]}</td> <td>${cookieValue[i]}</td> <td><button>Удалить!</button></td>`;
    table.appendChild(tr);
}

document.addEventListener('click', e => {
    
    if (e.target.tagName != 'BUTTON') return
    
    let currentCookieName = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML,
        currentCookieValue = e.target.parentElement.previousElementSibling.innerHTML,
        userAnswer = confirm(`Удалить cookie с именем ${currentCookieName} ?`),
        date = new Date;
    
    if (userAnswer === true) {
        date.setDate(date.getDate() + -1);
        document.cookie = `${currentCookieName}=${currentCookieValue}; expires=${date.toGMTString()}`;
    }
    
})
