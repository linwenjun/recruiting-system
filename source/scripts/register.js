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


    function resetPasswordSafe(){
      $('[name=danger]').removeClass('danger');
      $('[name=general]').removeClass('general');
      $('[name=safe]').removeClass('safe');
    }
    var passwordSafe = {
        safe: function(val) {
            if (val == '') return 0;
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");
            if (enoughRegex.test(val) == false) {
                return 1;
            } else if (strongRegex.test(val)) {
                return 3;
            } else if (mediumRegex.test(val)) {
                return 2;
            } else {
                return 1;
            }
            return false;
        },
        state: function($elem, level, stateclass) {
            resetPasswordSafe();

            switch (level) {
                case 1:
                    $('[name=danger]').addClass('danger');
                    break;
                case 2:
                    $('[name=general]').addClass('general');
                    break;
                case 3:
                    $('[name=safe]').addClass('safe');
                    break;
                case 0:
                    break;
            }
        }
    };

    $('#register-password').bind('keyup', function() {
        var val = $(this).val();
        var level = passwordSafe.safe(val);
        passwordSafe.state($('.passport-safely'), level, ['safely-danger', 'safely-general', 'safely-safe']);
    });
});
