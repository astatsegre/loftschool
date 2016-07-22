"use strict"

let scanDOM = function(element) {
    let result = {};
    let searchTags = function(element, init, result) {
        
        if (init === undefined) {
            init = 0;
        }
        
        if (element.children[init] != undefined) {
        
            let currentTagName = element.children[init].tagName;

                    if (`${currentTagName}` in result == true) {
                        result[`${currentTagName}`] += 1;
                    } else {
                        result[`${currentTagName}`] = 1;
                    }
        }
        
        if (init < element.children.length) {
            
            if (element.children[init].children.length != 0) {
                
                let currentElement = element.children[init],
                    currentInit = 0;
                searchTags(currentElement, currentInit, result);
                init++;
                searchTags(element, init, result);
            } else {
                init++;
                searchTags(element, init, result);
            }
        } else {
            return result;
        }
        
    }
    
    searchTags(element, undefined, result);
    return result;
}

console.log( scanDOM(document.body) );








