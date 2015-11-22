var $ = global.jQuery = require('jquery');

$(function(){
    $('.start-button').find('button').on('click',function(){
        window.location.href='answer.html';
    });
});