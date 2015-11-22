var $ = global.jQuery = require('jquery');

$(function(){
    $('.confirm').find('button').on('click',function(){
        window.location.href='progress.html';
    });
});