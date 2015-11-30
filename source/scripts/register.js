var $ = global.jQuery = require('jquery');
require("bootstrap");

$(function(){
    $('#agreement').on('click',function(){
        jQuery('#agreenmentModal').modal('show');
    });
});