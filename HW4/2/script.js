"use strict"

let deleteTextNodes = function(element){
    
    console.log(element.childNodes);
    
    for (let i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType == 3) {
            element.removeChild(element.childNodes[i]);
        }
    }
    
    console.log(element.childNodes);
}

let body = document.body;

deleteTextNodes(body);