var $ = global.jQuery = require('jquery');
require("bootstrap");
require('hideshowpassword');

$(function () {
    $('#register-password').hidePassword(true);

    $('#change-to-logon').on('click', function () {
        $('#register').hide();
        $('#logon').show();
        $('#register-right').hide();
        $('#logon-right').show();
        $('#logon-password').hidePassword(true);
    });

    $('#change-to-register').on('click', function () {
        $('#logon').hide();
        $('#register').show();
        $('#logon-right').hide();
        $('#register-right').show();
    });

    $('#agreementModal').on('show.bs.modal', function () {
        $('.modal .modal-body').css('overflow-y', 'auto').css('max-height', $(window).height() * 0.7);
    });
});
