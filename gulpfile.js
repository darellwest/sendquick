var fs = require('fs');
eval(fs.readFileSync('./gulp/tasks/styles.js')+'');
eval(fs.readFileSync('./gulp/tasks/scripts.js')+'');
eval(fs.readFileSync('./gulp/tasks/watch.js')+'');