'use strict';
import $ from 'jquery';

// パネルの色をトグル
$('.block').click(function(){
    console.log('zoom');
    $(this).animate({width: '105pt', height: '105pt'}, 50);
    console.log($(this).css('background-color'));
    if ($(this).hasClass('hit') ){
        $(this).css('background-color', 'brown')
        $(this).removeClass('hit')
    } else {
        $(this).css('background-color', 'blue')
        $(this).addClass('hit')
    }
    $(this).animate({width: '100pt', height: '100pt'}, 500);
})

import io from 'socket.io-client';
const socket = io('http://10.255.1.146:8000');

const status = $('#status');
socket.on('status', (data) => {
    if ( typeof(data.no) !== 'undefined' && typeof(data.color) !== 'undefined' ) {
        var blk = '#block' + data.no;
        console.log("hello");
        status.text(blk);
        $(blk).css("background-color", data.color);
        if ($(blk).hasClass('hit') ){
            $(blk).removeClass('hit')
        } else {
            $(blk).addClass('hit')
        }
        //status.text(data.code.toString());
    }
});


