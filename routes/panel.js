var express = require('express');
var router = express.Router();
var io = require('socket.io-client');
var socket = io('http://10.255.1.146:8000');

function jsonCheck(json){
    if ( typeof(json.no) === 'undefined' ) {
        return false;
    }
    // パネルは１から９まで
    no = parseInt(json.no);
    if ( no < 1 || no > 9 ) {
        return false;
    }
    if ( typeof(json.color) === 'undefined' ) {
        return false
    }
    return true
}

router.post('/', function(req, res, next) {
    if (jsonCheck(req.body)) {
        console.log(req.body);
        socket.emit('status', req.body);
        res.send("OK.");
    } else {
        console.log('[!] ERROR: invalid JSON');
        console.log(req.body);
        res.send("ERROR.");
    }
});

module.exports = router;
