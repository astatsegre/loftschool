'use strict'

let fs = require('fs');

let dirs = fs.readdirSync('../../');

console.log(dirs)

for(let dir of dirs) {
//    let stat = fs.statSync(dir);

//    console.log(dir, stat.size);
}
