'use strict'

//
// Изначальный класс калькулятора
//

let calculatorES5 = function(firstNumber) {
    this.firstNumber = firstNumber;
};

calculatorES5.prototype.sum = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
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

//
// Создаю новый класс калькулятора, возводящего результаты в квадрат
//


let inherit = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

let SqrCalc = function(firstNumber) {
    this.firstNumber = firstNumber;
};

inherit(SqrCalc, calculatorES5);

SqrCalc.prototype.sum = function(arr) {
    let parentResult = calculatorES5.prototype.sum.apply(this, arr),
        currentResult = parentResult * parentResult;

    return currentResult
};

SqrCalc.prototype.dif = function(arr) {
    let parentResult = calculatorES5.prototype.dif.apply(this, arr),
        currentResult = parentResult * parentResult;

    return currentResult
};

SqrCalc.prototype.div = function(arr) {
    let parentResult = calculatorES5.prototype.div.apply(this, arr),
        currentResult = parentResult * parentResult;

    return currentResult
};

SqrCalc.prototype.mul = function(arr) {
    let parentResult = calculatorES5.prototype.mul.apply(this, arr),
        currentResult = parentResult * parentResult;

    return currentResult
};

let mySqrCalculator = new SqrCalc(100);
let newArr = [2, 2];

console.log( mySqrCalculator.sum(newArr) );
console.log( mySqrCalculator.dif(newArr) );
console.log( mySqrCalculator.div(newArr) );
console.log( mySqrCalculator.mul(newArr) );
