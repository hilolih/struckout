var express = require('express');
var router = express.Router();
var io = require('socket.io-client');
var socket = io('http://10.255.1.146:8000');

function jsonCheck(json){
    if ( typeof(data.no) === 'undefined' ) {
        return false
    }
    if ( typeof(data.color) !== 'undefined' ) {
        return false
    }
    return true
}

router.post('/', function(req, res, next) {
    console.log(req.body);
    socket.emit('status', req.body);
    res.send("OK.");
});

module.exports = router;
