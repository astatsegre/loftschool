"use strict"

console.log('лох');

document.cookie = "city=saint-p;";
document.cookie = "age=24;";
document.cookie = "sex=male";
document.cookie = "country=russia";

let cookies = document.cookie.split(';');
console.log(cookies);