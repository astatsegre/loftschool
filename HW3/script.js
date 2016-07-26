"use strict"

let forEach = function (arr, callbackFunc) {
        
    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i];
        
        callbackFunc(item, i, arr); 
    }
}

let firstArray = [1,2,3,4,5];

//forEach(firstArray, item => console.log(item));

let filter = function(arr, filterFunc) {
    
    let b = 0;
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i];
        
        if (filterFunc(item, i, arr) === true) {
            newArr[b] = item;
            b++;
        }
    }
    return newArr;
}

//let greaterThan4 = filter(firstArray, item => item > 4);
//console.log(greaterThan4);

let map = function(arr, mapFunc){
    
    let b =0;
    let newArr =[];
    
    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i];
        
        newArr[b] = mapFunc(item, i, arr);
        b++;
    }
    return newArr;
}

//let sqare = map(firstArray, item => item*item);
//console.log(sqare);

let slice = function(arr, begin, end) {
    
    let b = 0;
    let newArr = [];
    
    if (end === undefined) {
        end = arr.length + 1;
    };
    
    if (begin === undefined) {
        begin = 0;
    }
    
    if (begin < 0) {
        begin = arr.length + begin;
    };
    
    if (end < 0) {
        end = arr.length + end;
    };
    
    for (let i = begin; i < end; i++) {
        newArr[b] = arr[i];
        b++;
    };
    
    return newArr;
}

//let checkSlice = slice(firstArray);
//console.log(checkSlice);


let reduce = function (arr, reduceFunc, initialValue, result, i) {
    
    if (initialValue === undefined) {
        if (i === undefined) {
            let i = 0;
            var result = arr[0];
            let currentValue = arr[i + 1];
            let previousValue = result;

            result = reduceFunc(previousValue, currentValue);

            i++;

            return reduce(arr, reduceFunc, initialValue, result, i);
        } 
        if (i < arr.length - 1) {
        
            let previousValue = result;
            let currentValue = arr[i + 1];

            result = reduceFunc(previousValue, currentValue);

            i++;

            return reduce(arr, reduceFunc, initialValue, result, i);
        } else {
            return result;
        }
        
    } else {
        if (i === undefined) {
            var i = -1;
            var result = initialValue;
            let currentValue = arr[0];
            let previousValue = result;
            
            result = reduceFunc(previousValue, currentValue);

            i++;

            return reduce(arr, reduceFunc, initialValue, result, i);
        }
        
         if (i < arr.length - 1) {
            let previousValue = result;
            let currentValue = arr[i + 1];

            result = reduceFunc(previousValue, currentValue);

            i++;

            return reduce(arr, reduceFunc, initialValue, result, i);
         } else {
             return result;
         }
    }
    
}

//let concatArr = reduce(firstArray, function(previousValue, currentValue) {
//  return previousValue + currentValue;
//}, -10);
//console.log(concatArr);
