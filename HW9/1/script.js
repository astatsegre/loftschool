'use strict'

let calculatorES5 = function(firstNumber) {
    this.firstNumber = firstNumber;
};

calculatorES5.prototype.sum = function() {
            let currentArguments = arguments;
            let result = this.firstNumber;
            for (let i = 0; i < currentArguments.length; i++) {
                result += arguments[i];
            }
            return result;
        };

calculatorES5.prototype.dif = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        };

calculatorES5.prototype.div = function() {
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

calculatorES5.prototype.mul = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        };

let myCalculator = new calculatorES5(100);

console.log( myCalculator.sum(1, 2, 3, 10) );
console.log( myCalculator.dif(10, 20) );
console.log( myCalculator.div(2, 2) );
console.log( myCalculator.mul(2, 2) );
console.log( myCalculator.div(2, 0) );


let inherit = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

let SqrCalc = function(firstNumber) {
    this.firstNumber = firstNumber;

};

inherit(SqrCalc, calculatorES5);

SqrCalc.prototype.sum = function() {
    let result = calculatorES5.prototype.sum.apply(this, arguments);
    let sqrResult = result * result;
    console.log(result);

    return sqrResult;
};

let mySqrCalculator = new SqrCalc(100);

console.log( mySqrCalculator.sum([1, 2, 3, 10]) );
