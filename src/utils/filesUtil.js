const fs = require('fs');
const path = require('path');

module.exports = {
    getRucursivelyDirectoryFiles
}

function getRucursivelyDirectoryFiles(dir, filter = "") {
    let files = [];

    fs.readdirSync(dir)
    .forEach(file => {
        const absolutePath = path.join(dir, file);
        const isDirectory = fs.statSync(absolutePath).isDirectory();

        if(!isDirectory && !file.endsWith(filter)) return;

        files.push(isDirectory ? getRucursivelyDirectoryFiles(absolutePath) : absolutePath);
    })


    return files;
}