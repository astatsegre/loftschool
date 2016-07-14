"use strict"

let forEach = function (arr, callbackFunc) {
        
    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i];
        
        callbackFunc(item, i, arr); 
    }
}

let firstArray = [1,2,3,4,5,6,7,7];

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
//
//console.log(sqare);

let slice = function(arr, begin, end) {
    
    let b = 0;
    let newArr = [];
    
    for (let i = begin; i < end; i++) {
        newArr[b] = arr[i];
        b++;
    }
    
    return newArr;
}

//let newSlice = slice(firstArray, 2, 5);
//console.log(newSlice);


