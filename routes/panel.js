var express = require('express');
var router = express.Router();
var io = require('socket.io-client');
var socket = io('http://10.255.1.146:8000');

router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.body.name);
    socket.emit('status', {code: 'blue'});
    res.send("aaa");
});

module.exports = router;
