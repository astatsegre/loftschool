var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    empty = [];

function isAllTrue(source, filterFn) {
    
    var sourceCheck = source;
    
    try {
        if (sourceCheck.length == 0) {
            throw new Error ('Пустой массив!')
        }
        
        for (var i = 0; i < source.length; i++) {
        
        if (filterFn(source[i]) === false) {
            return false;
        }
    }
    
    return true;
    }
    
    catch (e) {
        console.log('Все очень плохо!')
        } 
}


function isNumber(val) {
return typeof val === 'number';
}

console.log ( isAllTrue(allNumbers, isNumber) );
console.log ( isAllTrue(someNumbers, isNumber) );
console.log ( isAllTrue(noNumbers, isNumber) );
console.log ( isAllTrue(empty, isNumber) );
    