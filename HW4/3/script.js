"use strict"

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
                let innerElement = element.childNodes[init];
                let innerInit = 0;
                deleteTextNodesRec(innerElement, innerInit);
                init++;
                return deleteTextNodesRec(element, init);
            }
        }
    } else {
        
       return element;
    }
}

console.log(document.body.childNodes);
console.log(document.body.childNodes[3].childNodes);
console.log(document.body.childNodes[3].childNodes[1].childNodes);

let withNoTextNodes = deleteTextNodesRec(document.body, 0);

console.log(withNoTextNodes.childNodes);
console.log(withNoTextNodes.childNodes[1].childNodes);
console.log(withNoTextNodes.childNodes[1].childNodes[0].childNodes);