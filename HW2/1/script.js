let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    empty = [],
    allNumbersFunc = isAllTrue(allNumbers, isNumber),
    someNumbersFunc = isAllTrue(someNumbers, isNumber),
    noNumbersFunc = isAllTrue(noNumbers, isNumber),
    emptyFunc = isAllTrue(empty, isNumber);


function isAllTrue(source, filterFn) {
    
    let sourceCheck = source;
    
    try {
        if (sourceCheck.length == 0) {
            throw new Error ('Пустой массив!')
        }
        
        for (let i = 0; i < source.length; i++) {
        
        if (filterFn(source[i]) === false) {
            return false;
        }
    }
    
    return true;
    }
    
    catch (e) {
        console.log('Все очень плохо! У нас пустой массив!')
        } 
}

function isNumber(val) {
return typeof val === 'number';
}

 let checkFunc = function(func) {
    if (func !== undefined) {
        console.log(func);
    }
}

checkFunc(allNumbersFunc);
checkFunc(someNumbersFunc);
checkFunc(noNumbersFunc);
checkFunc(emptyFunc);   
    