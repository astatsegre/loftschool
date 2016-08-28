let fs = require('fs');

let scanFiles = function(dirForSearch) {

    let dirs = fs.readdirSync(dirForSearch);

    console.log(dirs);

    for (let dir of dirs) {
        let stat = fs.statSync(dir);

        console.log(stat);
    }
};

scanFiles('C:/GitHub/HW10');
