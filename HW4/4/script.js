"use strict"

let scanDOM = function(element) {
    let result = {};
    let searchTags = function(element, init, result) {
        
        if (init === undefined) {
            init = 0;
        }
        
        if (init < element.children.length) {
            
            if (element.children[init].children.length != 0) {
                let currentTagName = element.children[init].tagName;
                
                if (`${currentTagName}` in result == true) {
                    result[`${currentTagName}`] += 1;
                } else {
                    result[`${currentTagName}`] = 1;
                }
                let currentElement = element.children[init],
                    currentInit = 0;
                searchTags(currentElement, currentInit, result);
            } else {
            
                let currentTagName = element.children[init].tagName;
                
                if (`${currentTagName}` in result == true) {
                    result[`${currentTagName}`] += 1;
                    init++
                    searchTags(element, init, result);
                } else {
                    result[`${currentTagName}`] = 1;
                    init++
                    searchTags(element, init, result);
                }
            }
        } else {
            return result;
        }
        
    }
    
    searchTags(element, undefined, result);
    return result;
}

console.log( scanDOM(document.body) );



//    let scanDOM = function(element) {
//        let result = {}
//        let searchTags = function(element, init, result) {
//            
//            console.log(element, init, result);
//        }
//        
//        searchTags(element, undefined, result);
//    }
//    
//    scanDOM(document.body);







