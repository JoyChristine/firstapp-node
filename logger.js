console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(msg) {
    //send http request
    console.log(msg);

}
module.exports = log;