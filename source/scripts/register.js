var $ = global.jQuery = require('jquery');
require("bootstrap");

$(function () {
    $('#change-to-logon').on('click', function () {
        $('#register').hide();
        $('#logon').show();
        $('#register-right').hide();
        $('#logon-right').show();
    });

    $('#change-to-register').on('click', function () {
        $('#logon').hide();
        $('#register').show();
        $('#logon-right').hide();
        $('#register-right').show();
    });
});
