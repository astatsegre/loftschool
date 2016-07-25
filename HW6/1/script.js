"use strict"

let timer = function(milliseconds) {
    
    let promiseFulfill = new Promise((resolve, reject) => {
        
        setTimeout(resolve, milliseconds);
    })
    
    promiseFulfill.then( () => {
        return promiseFulfill;
    });
    
    return promiseFulfill
        
    };


    
  timer(3000).then(() => console.log('я вывелась через 3 секунды'))


