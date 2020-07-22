const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();
const fs = require('fs');
const path = require('path');

emitter.on('log', message => {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
    if (err) throw err;
  });
});

function log(message) {
  emitter.emit('log', message);
}

module.exports = log;