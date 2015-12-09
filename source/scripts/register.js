var $ = global.jQuery = require('jquery');
require("bootstrap");
require('hideshowpassword');

$(function() {
  // $('#register-password').hidePassword(true);


  $('.lose').hide();
  $('#change-to-logon').on('click', function() {
    $('#register').hide();
    $('#logon').show();
    $('#register-right').hide();
    $('#logon-right').show();
    $('#logon-password').hidePassword(true);
  });

  $('#change-to-register').on('click', function() {
    $('#logon').hide();
    $('#register').show();
    $('#logon-right').hide();
    $('#register-right').show();
  });

  $('#agreementModal').on('show.bs.modal', function() {
    $('.modal .modal-body').css('overflow-y', 'auto').css('max-height', $(window).height() * 0.7);
  });


  function resetPasswordSafe() {
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

  var chooses = ['school', 'name', 'email', 'tel', 'password'];

  chooses.forEach(function(choose) {
    isNull(choose);
  });

  function isNull(choose) {
    $('[name=' + choose + ']').blur(function() {
      if (this.value === '') {
        $('[name=lose-' + choose + ']').show();
      } else {
        $('[name=lose-' + choose + ']').hide();
      }
    });
  }

  document.getElementById("register-btn").addEventListener('click', function(evt) {
    var tel = $('[name=tel]').val();
    var isTel = isRightTel(tel);

    var email = $('[name=email]').val();
    var isEmail = isRightEmail(email);

    var password = $('[name=password]').val();
    var isPassword = isRightPassword(password);

    var checkbox = $('.agree-check');
    var isChecked = isBoxChecked(checkbox);

    if(isTel && isEmail && isPassword && isChecked) {
      alert("gongxi");
    }else {
      evt.preventDefault();
    }
  });

  function isRightTel(str) {
    var isTel = false;
    if (str === '') {
      $('[name=lose-tel]').show();
    } else if (str.length !== 11) {
      $('[name=wrong-tel]').show();
    } else {
      $('[name=wrong-tel]').hide();
      isTel = true;
    }
    return isTel;
  }

  function isRightEmail(str) {
    var isEmail = false;
    if (str === '') {
      $('[name=lose-email]').show();
    } else if (!isEmailName(str)) {
      $('[name=wrong-email]').show();
    } else {
      $('[name=wrong-email]').hide();
      isEmail = true;
    }
    return isEmail;
  }

  function isEmailName(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  }

  function isRightPassword(str) {
    var isPassword = false;
    if (str === '') {
      $('[name=lose-password]').show();
    } else if (str.length < 8 || str.length > 16) {
      $('[name=wrong-password]').show();
    } else {
      $('[name=wrong-password]').hide();
      isPassword = true;
    }
    return isPassword;
  }

  function isBoxChecked(checkbox) {
    var isChecked = false;
    if (!checkbox.prop("checked")) {
      alert("please agree");
    } else {
      isChecked = true;
    }

    return isChecked;
  }
});
