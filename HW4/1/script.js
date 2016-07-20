"use strict"

let prepend = function(pasteInHere, paste) {
    
    let beforeMe = pasteInHere.firstElementChild;
    
    pasteInHere.insertBefore(paste, beforeMe);
}

let redSquare = document.querySelector('.red-square');
let h1 = document.createElement('h1');
h1.innerHTML = 'Черный текст';

prepend(redSquare, h1);














