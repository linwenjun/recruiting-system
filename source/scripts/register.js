var $ = global.jQuery = require('jquery');
require("bootstrap");

$(function(){
    $('#agreement').on('click',function(){
      console.log($);
      $('#agreementModal').modal('show');
    });
});
