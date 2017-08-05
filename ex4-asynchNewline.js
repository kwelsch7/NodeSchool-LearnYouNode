const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err) {
        console.log(err.stack);
        return err;
    }
    const newLineCount = data.split('\n').length - 1;
    console.log(newLineCount);
});