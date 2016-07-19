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
    
    if (init < element.childNodes.length){
    
        if (element.childNodes[init].nodeType == 3) {
            element.removeChild(element.childNodes[init]);
            return deleteTextNodesRec(element, init);
            
        } else {
            if (element.childNodes[init].childNodes.length == 0) {
                init++;
                return deleteTextNodesRec(element, init);
            } else {
                element = element.childNodes[init];
                init = 0;
                return deleteTextNodesRec(element, init);
            }
        }
    } else
    
    return element;   
}

console.log(document.body.childNodes);

let withNoTextNOdes = deleteTextNodesRec(document.body, 0);

console.log(withNoTextNOdes.childNodes);
console.log(withNoTextNOdes.childNodes[1].childNodes);



