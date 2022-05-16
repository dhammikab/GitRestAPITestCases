
function createDataForPagination_test(fileCount) {

var fs = require('fs');
let file = 1

while (file < fileCount) {
    fs.appendFile(`./pagination_test/${file}.txt`, `This is the content in file ${file}.txt` , function (err) {
      if (err) throw err;
      console.log('Saved!');
    }); 
    file = file + 1
 }  

}

createDataForPagination_test(400)

