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
    
    
    let searchTextNodes = function(element, init, result) {
        
    if (init === undefined) {
        var init = 0;
        result.TEXT = 0;
    }
    
    if (init < element.childNodes.length){
    
        if (element.childNodes[init].nodeType == 3) {
            result.TEXT += 1;
            init++;
            return searchTextNodes(element, init, result);
            
        } else {
            if (element.childNodes[init].childNodes.length == 0) {
                init++;
                return searchTextNodes(element, init, result);
            } else {             
                let innerElement = element.childNodes[init];
                let innerInit = 0;
                searchTextNodes(innerElement, innerInit, result);
                init++;
                return searchTextNodes(element, init, result);
            }
        }
    } else {
        
       return result;
    }
}
    
    
    
    let searchClasses = function(element, init, result) {
        
        if (init === undefined) {
            init = 0;
    };
      
        if (element.children[init] != undefined) {
            if (element.children[init].classList.length == 1) {
                let currentClass = element.children[init].classList[0];
                if (`${currentClass}` in result == true) {
                    result[`${currentClass}`] += 1;
                } else {
                    result[`${currentClass}`] = 1;
                }
                
            } else if (element.children[init].classList.length > 1) {
                for (let i = 0; i < element.children[init].classList.length; i++) {
                    let currentClass = element.children[init].classList[i];
                        if (`${currentClass}` in result == true) {
                            result[`${currentClass}`] += 1;
                        } else {
                            result[`${currentClass}`] = 1;
                        }
                    }
                }
            }
        
        if (init < element.children.length) {
            
            if (element.children[init].children.length != 0) {
                
                let currentElement = element.children[init],
                    currentInit = 0;
                searchClasses(currentElement, currentInit, result);
                init++;
                searchClasses(element, init, result);
            } else {
                init++;
                searchClasses(element, init, result);
            }
        } else {
            return result;
        }
        }
    
    searchTags(element, undefined, result);
    searchTextNodes(element, undefined, result);
    searchClasses(element, undefined, result);
    return result;
}

console.log( scanDOM(document.body) );

module.exports = scanDOM;










