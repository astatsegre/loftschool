'use strict'

let calculator = function(firstNumber) {
    this.firstNumber = firstNumber;
};

calculator.prototype.sum = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        };

calculator.prototype.dif = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        };

calculator.prototype.div = function() {
            let result = this.firstNumber;
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
        };

calculator.prototype.mul = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        };

let myCalculator = new calculator(100);

console.log( myCalculator.sum(1, 2, 3, 10) );
console.log( myCalculator.dif(10, 20) );
console.log( myCalculator.div(2, 2) );
console.log( myCalculator.mul(2, 2) );
console.log( myCalculator.div(2, 0) );
