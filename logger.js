const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(msg) {
        //send http request
        console.log(msg);

        //Raise an event
        this.emit('msg to you', { id: 1, url: 'http://' });
    }
}
module.exports = Logger;