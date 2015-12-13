var $ = global.jQuery = require('jquery');
require("bootstrap");

$(function(){
    $('.nav a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
});
