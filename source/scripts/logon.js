var $ = global.jQuery = require('jquery');

$(function(){
    $('#head').find('button').on('click',function(){
        window.location.href='start.html';
    });
});