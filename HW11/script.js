let fs = require('fs');

let scanFiles = function(dirForSearch, level) {

    let dirs = fs.readdirSync(dirForSearch);
    let currentLevel = '-';
    currentLevel += level || '';

    for (let dir of dirs) {
        let dirWithFullPath = dirForSearch +'/' + dir;
        let stat = fs.statSync(dirWithFullPath);

        if (stat.isFile() === true) {
            console.log(`${currentLevel}${dir} ${stat.size} bytes`);
        } else {
            console.log(`${currentLevel}${dir} (FOLDER)`)
            scanFiles(dirWithFullPath, currentLevel)
        }
    }
};

scanFiles('C:/GitHub');
