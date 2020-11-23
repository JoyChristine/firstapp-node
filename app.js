// function sayHello(name) {
//     console.log('hello ' + name);

// }
// sayHello("joy");


//MODULE 
// console.log(module);

// const log = require('./logger');

// log('msg');


//PATH 
// const path = require('path')
// var pathObj = path.parse(__filename);
// console.log(pathObj)

//OS
// const os = require('os');
// const { Console } = require('console');
// var totalMem = os.totalmem()
// var freeMem = os.freemem()

// console.log(`Total Memory: ${totalMem}`)
// console.log(`free Memory: ${freeMem}`)


//FILE SYSTEM
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('%', function(err, files) {
//     if (err) console.log('ERROR', err);
//     else console.log('Result', files);
// });


//EVENTS
// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// //.on or .addListener
// logger.on('msg to you', (event) => {
//     console.log('logging', event)
// });
// logger.log('msg');
// //raise logging (data: msg)


//HTTP
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === './') {
        res.write('Hey');
        res.end();
    }
});

if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
}
// server.on('connection', (socket) => {
//     console.log('new connection ...')
// })

server.listen(3000);

console.log('listen on port 3000...');