'use strict'

let fs = require('fs');

let dirs = fs.readdirSync('./');

for(let dir of dirs) {
    let stat = fs.statSync(dir);

    console.log(dir);
}
