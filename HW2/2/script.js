"use strict"

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    empty = [],
    allNumbersFunc = isSomeTrue(allNumbers, isNumber),
    someNumbersFunc = isSomeTrue(someNumbers, isNumber),
    noNumbersFunc = isSomeTrue(noNumbers, isNumber),
    emptyFunc = isSomeTrue(empty, isNumber);


function isSomeTrue(source, filterFn) {
    
    let sourceCheck = source;
    
    try {
        if (sourceCheck.length == 0) {
            throw new Error ('Пустой массив!')
        }
        
        for (let i = 0; i < source.length; i++) {
        
        if (filterFn(source[i]) === true) {
            return true;
        }
    }
    
    return false;
    }
    
    catch (e) {
        console.log(e.message)
        } 
}

function isNumber(val) {
return typeof val === 'number';
}

let checkFunc = function(func) {
    if (func !== undefined) {
        console.log(func);
    }
};

checkFunc(allNumbersFunc);
checkFunc(someNumbersFunc);
checkFunc(noNumbersFunc);
checkFunc(emptyFunc);   
    