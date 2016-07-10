var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue(source, filterFn) {
    
    for (var i = 0; i < source.length; i++) {
        
        if (filterFn(source[i]) === false) {
            return false;
        }
    }
    
    return true;
}


function isNumber(val) {
return typeof val === 'number';
}

console.log ( isAllTrue(allNumbers, isNumber) );
console.log ( isAllTrue(someNumbers, isNumber) );
console.log ( isAllTrue(noNumbers, isNumber) );
