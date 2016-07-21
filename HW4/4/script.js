"use strict"

let scanDOM = function() {
    let searchTags = function(element, init) {
        
        let currentTagName = element.children[init].tagName,
            result = {};
        if (`${currentTagName}` == true) {
            result[`${currentTagName}`] = `${currentTagName}` + 1;
        } else {
            result[`${currentTagName}`] = 1;
        }
        
        
    }
}

// let five = 'age';
// 
// let result = {
//     age: 25,
// };
//
//console.log(result[`${five}`]);
//
//console.log('age' in result);












