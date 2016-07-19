"use strict"

let prepend = function(pasteInHere, paste) {
    
    let beforeMe = pasteInHere.firstElementChild;
    
    pasteInHere.insertBefore(paste, beforeMe);
}

//let redSquare = document.querySelector('.red-square');
//let h1 = document.createElement('h1');
//h1.innerHTML = 'Черный текст';
//
//prepend(redSquare, h1);


let deleteTextNodes = function(element){
    
    console.log(element.childNodes);
    
    for (let i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType == 3) {
            element.removeChild(element.childNodes[i]);
        }
    }
    
    console.log(element.childNodes);
}

//let body = document.body;
//
//deleteTextNodes(body);

let deleteTextNodesRec = function(element, init) {
    
    if (element.childNodes[init] == 3) {
        element.removeChild(element.childNodes[init]);
    } else {
        if (element.childNodes[init].childNodes.length == 0) {
        } else {
            init++;
            deleteTextNodesRec(element, init);
        }
    }
    
}

