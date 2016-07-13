"use strict"

//// обычная функция


let consoleRec = function(arr, zero){
    
    if (zero < arr.length) {
        console.log(arr[zero]);
        zero++;
        consoleRec(arr, zero);
    }
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);


//// стрелочная функция

consoleRec = (arr, zero) => {
    
    if (zero < arr.length) {
        console.log(arr[zero]);
        zero++;
        consoleRec(arr, zero);
    }
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);