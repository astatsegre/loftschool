"use strict"

let table = document.querySelector('table');

document.cookie = "city=saint-p;";
document.cookie = "age=24;";
document.cookie = "sex=male";
document.cookie = "country=russia";

let showCookie = function() {
    
    if (document.cookie == "") return;
    
    let cookies = document.cookie.split(';'),
        cookieName = [],
        cookieValue = [];

    cookies.forEach( (item, i, arr) => {
        let splitedItem = item.split('=');
        cookieName[i] = splitedItem[0];
        cookieValue[i] = splitedItem[1];
    })

    let fragment = document.createDocumentFragment();

    for (let i = 0; i < cookieName.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${cookieName[i]}</td> <td>${cookieValue[i]}</td> <td><button>Удалить!</button></td>`;
        fragment.appendChild(tr);
    }
    
    table.appendChild(fragment);
};

let clearCookieTable = function() {
    let tableChildrenLength = table.children.length;
    for (let i = 1; i < tableChildrenLength; i++) {
        let tableChild = table.children[1];
        table.removeChild(tableChild);
    }
};

showCookie();

document.addEventListener('click', e => {
    
    if (e.target.tagName == 'BUTTON') {
    
        let currentCookieName = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML,
            currentCookieValue = e.target.parentElement.previousElementSibling.innerHTML,
            userAnswer = confirm(`Удалить cookie с именем ${currentCookieName} ?`),
            date = new Date;

        if (userAnswer === true) {
            date.setDate(date.getDate() -1);
            document.cookie = `${currentCookieName}=${currentCookieValue}; expires=${date.toGMTString()}`;
            clearCookieTable();
            showCookie();
        }
    } else if (e.target.getAttribute('name') == 'submit') {
        e.preventDefault();
        
        let nameValue = document.forms[0].name.value,
            valueValue = document.forms[0].value.value,
            expiresValue = document.forms[0].expires.value,
            date = new Date;
        
        console.log(nameValue);
        console.log(valueValue);
        console.log(expiresValue);
        
        if (nameValue == '' || valueValue == '' || expiresValue == '') {
            alert('Заполните все поля формы');
            return
        }
        
        date.setDate(date.getDate() + +expiresValue);
        
        document.cookie = `${nameValue}=${valueValue}; expires=${date.toGMTString()}`;
        
        document.forms[0].name.value = '';
        document.forms[0].value.value = '';
        document.forms[0].expires.value = '';
        
        clearCookieTable();
        showCookie();
        
    }
    
})

