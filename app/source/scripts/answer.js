var $ = global.jQuery = require('jquery');
var request = require('superagent');
require("bootstrap");

$(function () {
    $('#submitModal').on('show.bs.modal', function () {
        $('.modal-content').css('margin-top', '230px');
    });

    request.get('/answer')
        .set('Content-Type','application/json')
        .end(function(err,res){

        })
});
