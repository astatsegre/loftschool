'use strict'


/////////////////////////////////////////
// Изначальный класс калькулятора в ES5//
/////////////////////////////////////////


let CalculatorES5 = function(firstNumber) {
    this.firstNumber = firstNumber;
};

CalculatorES5.prototype.sum = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        };

CalculatorES5.prototype.dif = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        };

CalculatorES5.prototype.div = function() {
            let result = this.firstNumber;

                for (let i = 0; i < arguments.length; i++) {

                        if (arguments[i] == 0) {
                            throw new Error ('Пытаются поделить на ноль')
                        }
                        result /= arguments[i];
                }
                return result;
                        console.log(e.message)
        };

CalculatorES5.prototype.mul = function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        };

let myCalculator = new CalculatorES5(100);

console.log( myCalculator.sum(1, 2, 3, 10) );
console.log( myCalculator.dif(10, 20) );
console.log( myCalculator.div(2, 2) );
console.log( myCalculator.mul(2, 2) );
console.log( myCalculator.div(2, 2) );


/////////////////////////////////////////////////////////////////////
// Новый класс калькулятора, возводящего результаты в квадрат в ES5//
/////////////////////////////////////////////////////////////////////


let inherit = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

let SqrCalc = function(firstNumber) {
    this.firstNumber = firstNumber;
};

inherit(SqrCalc, CalculatorES5);

SqrCalc.prototype.sum = function() {
    let parentResult = CalculatorES5.prototype.sum.apply(this, arguments);

    return Math.pow(parentResult, 2);
};

SqrCalc.prototype.dif = function() {
    let parentResult = CalculatorES5.prototype.dif.apply(this, arguments);

    return Math.pow(parentResult, 2)
};

SqrCalc.prototype.div = function() {
    let parentResult = CalculatorES5.prototype.div.apply(this, arguments);

    return Math.pow(parentResult, 2)
};

SqrCalc.prototype.mul = function() {
    let parentResult = CalculatorES5.prototype.mul.apply(this, arguments);

    return Math.pow(parentResult, 2)
};

let mySqrCalculator = new SqrCalc(100);
let newArr = [2, 2];

console.log( mySqrCalculator.sum(2, 2) );
console.log( mySqrCalculator.dif(2, 2) );
console.log( mySqrCalculator.div(2, 2) );
console.log( mySqrCalculator.mul(2, 2) );


/////////////////////////////////////////
// Изначальный класс калькулятора в ES6//
/////////////////////////////////////////


class CalculatorES6 {
    constructor(firstNumber) {
       this.firstNumber = firstNumber;
    }

    sum() {
        let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
    }

    dif() {
        let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
    }

    div() {
        let result = this.firstNumber;

            for (let i = 0; i < arguments.length; i++) {

                    if (arguments[i] == 0) {
                        throw new Error ('Пытаются поделить на ноль')
                    }
                    result /= arguments[i];
            }
            return result;
    }

    mul() {
        let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
    }

};

let myES6Calculator = new CalculatorES6(100);

console.log( myCalculator.sum(1, 2, 3, 10) );
console.log( myCalculator.dif(10, 20) );
console.log( myCalculator.div(2, 2) );
console.log( myCalculator.mul(2, 2) );
console.log( myCalculator.div(2, 2) );


/////////////////////////////////////////////////////////////////////
// Новый класс калькулятора, возводящего результаты в квадрат в ES6//
/////////////////////////////////////////////////////////////////////


class SqrCalcES6 extends CalculatorES6 {
    constructor(initial) {
        super(initial);
    }

    sum() {
        let parentResult = super.sum.apply(this, arguments),
            currentResult = Math.pow(parentResult, 2);

        return currentResult

    }

    dif() {
       let parentResult = super.dif.apply(this, arguments),
           currentResult = Math.pow(parentResult, 2);

        return currentResult
    }

    div() {
        let parentResult = super.div.apply(this, arguments),
            currentResult = Math.pow(parentResult, 2);

        return currentResult
    }

    mul() {
        let parentResult = super.mul.apply(this, arguments),
            currentResult = Math.pow(parentResult, 2);

        return currentResult
    }
}

let mySqrCalculatorES6 = new SqrCalcES6(100);

console.log( mySqrCalculatorES6.sum(2, 2) );
console.log( mySqrCalculatorES6.dif(2, 2) );
console.log( mySqrCalculatorES6.div(2, 2) );
console.log( mySqrCalculatorES6.mul(2, 2) );
