"use strict"

function calculator (firstNumber) {
    let objB;
    return objB = {
        sum: function() {
            let result = firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        },
        
        dif: function() {
            let result = firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        },
        
        div: function() {
            let result = firstNumber;
            try{
                for (let i = 0; i < arguments.length; i++) {

                        if (arguments[i] == 0) {
                            throw new Error ('Пытаются поделить на ноль')
                        }
                        result /= arguments[i];
                }
                return result;
            }
            catch(e) {
                        console.log(e.message)
                    }
        },
        
        mul: function() {
            let result = firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        },   
    }
}

let myCalculator = calculator(100);

console.log( myCalculator.sum(1, 2, 3, 10) );
console.log( myCalculator.dif(10, 20) );
console.log( myCalculator.div(2, 2) );
console.log( myCalculator.mul(2, 2) );
console.log( myCalculator.div(2, 0) );