const fs = require('fs');

var contents = fs.readFileSync('userData.txt', 'utf8').toString().split('\n');
for(i in contents) {
    console.log(contents[i]);
}