var $ = global.jQuery = require('jquery');

$(function(){
    $('.goon-button').find('button').on('click',function(){
        window.location.href='dojo.html';
    });
});