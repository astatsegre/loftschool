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

//let reduce = function (arr, reduceFunc){
//
//    let i = 0
//    let previousValue = arr[i];
//    let currentItem = arr[i + 1];
//    let recFunc = function(currentItem) {
//
//        if (i < arr.length) {
//            let result = reduceFunc(previousValue, currentItem, index, arr);
//            previousValue = result;
//            i++;
//            recFunc(currentItem);
//        }
//        return result;
//    }
//    
//    return result;
//}
//
//let wow = reduce(firstArray, function(previousValue, currentIten) {
//       return previousValue + currentItem;
//       });
//
//console.log(wow)



let reduce = function (arr, reduceFunc, zero, result) {
    
    if (zero < (arr.length - 1)) {
        if (zero === 0) {
            var result = arr[0];
        }
        let previousValue = result;
        let currentValue = arr[zero + 1];

        result = reduceFunc(previousValue, currentValue);

        zero++;

        reduce(arr, reduceFunc, zero, result);
    }
    return result;
}

let sumFunc = reduce(firstArray, function(previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

console.log(sumFunc);


//let externalFunc = function(someFunc) {
//        var b = someFunc;
//    let func2 = function(b) {
//        b();
//    }
//    
//    func2();
//}
//
//externalFunc(function() {
//    console.log('я работаю, как сучка');
//});

