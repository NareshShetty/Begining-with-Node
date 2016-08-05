var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
// Subscribe
emitter.on('foo', function (arg1, arg2) {
    console.log('Foo raised, Args:', arg1, arg2);
});
// Emit
emitter.emit('foo', { a: 123 }, { b: 456 });

emitter.on('foo', function () {
    console.log('subscriber 1');
});

emitter.on('foo', function () {
    console.log('subscriber 2');
});
emitter.emit('foo');

emitter.once('foo', function () { console.log('foo has been raised');
});
// Emit twice
emitter.emit('foo');
emitter.emit('foo');
module.exports = router;
