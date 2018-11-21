'use strict';
import $ from 'jquery';
const block1 = $('#block1');

block1.click(() => {
    block1.animate({width: '300pt', height: '300pt'}, 2000);
    block1.animate({width: '100pt', height: '100pt'}, 2000);
});

import io from 'socket.io-client';
const socket = io('http://10.255.1.146:8000');

const status = $('#status');
socket.on('status', (data) => {
  status.text(data.code.toString());
});


