'use strict'

/////////////////////////////////////////
// Изначальный класс калькулятора в ES5//
/////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////
// Новый класс калькулятора, возводящего результаты в квадрат в ES5//
/////////////////////////////////////////////////////////////////////


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
console.log( myCalculator.div(2, 0) );

/////////////////////////////////////////////////////////////////////
// Новый класс калькулятора, возводящего результаты в квадрат в ES6//
/////////////////////////////////////////////////////////////////////

class SqrCalcES6 extends CalculatorES6 {
    constructor(initial) {
        super(initial);
    }

    sum(arr) {
        let parentResult = super.sum(arr),
            currentResult = parentResult * parentResult;

        return currentResult

    }

    dif(arr) {
       let parentResult = super.dif(arr),
            currentResult = parentResult * parentResult;

        return currentResult
    }

    div(arr) {
        let parentResult = super.div(arr),
            currentResult = parentResult * parentResult;

        return currentResult
    }

    mul(arr) {
        let parentResult = super.mul(arr),
            currentResult = parentResult * parentResult;

        return currentResult
    }
}

//let inherit = function(child, parent) {
//    child.prototype = Object.create(parent.prototype);
//};
//
//let SqrCalc = function(firstNumber) {
//    this.firstNumber = firstNumber;
//};
//
//inherit(SqrCalc, calculatorES5);
//
//SqrCalc.prototype.sum = function(arr) {
//    let parentResult = calculatorES5.prototype.sum.apply(this, arr),
//        currentResult = parentResult * parentResult;
//
//    return currentResult
//};
//
//SqrCalc.prototype.dif = function(arr) {
//    let parentResult = calculatorES5.prototype.dif.apply(this, arr),
//        currentResult = parentResult * parentResult;
//
//    return currentResult
//};
//
//SqrCalc.prototype.div = function(arr) {
//    let parentResult = calculatorES5.prototype.div.apply(this, arr),
//        currentResult = parentResult * parentResult;
//
//    return currentResult
//};
//
//SqrCalc.prototype.mul = function(arr) {
//    let parentResult = calculatorES5.prototype.mul.apply(this, arr),
//        currentResult = parentResult * parentResult;
//
//    return currentResult
//};

let mySqrCalculatorES6 = new SqrCalcES6(100);
let newArrES6 = [2, 2];

console.log( mySqrCalculatorES6.sum(newArrES6) );
console.log( mySqrCalculatorES6.dif(newArrES6) );
console.log( mySqrCalculatorES6.div(newArrES6) );
console.log( mySqrCalculatorES6.mul(newArrES6) );
