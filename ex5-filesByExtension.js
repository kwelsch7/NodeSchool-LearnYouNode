const fs = require('fs');
const path = require('path');

const passedFile = process.argv[2];
const passedExt = process.argv[3];

fs.readdir(passedFile, 'utf8', (err, data) => {
    if(err) {
        console.log(err.stack);
        return err;
    }
    for(let filename of data) {
        if(path.extname(filename) === `.${passedExt}`) {
            console.log(filename);
        }
    }
});