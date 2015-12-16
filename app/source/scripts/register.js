var $ = global.jQuery = require('jquery');
require("bootstrap");
var request = require("superagent");

$(function() {

  $('.lose').hide();
  $('#change-to-logon').on('click', function() {
    $('#register').hide();
    $('#logon').show();
    $('#register-right').hide();
    $('#logon-right').show();
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

  var flag = false;

  $('.toggle').on('click', function() {
    if (!flag) {
      $(this).text('隐藏密码');
      $('#register-password').attr("type", "text");
      flag = true;
    } else {
      $(this).text('显示密码');
      $('#register-password').attr("type", "password");
      flag = false;
    }
  });

  $('#register-password').bind('keyup', function() {
    var val = $(this).val();
    var level = passwordSafe.safe(val);

    passwordSafe.state($('.passport-safely'), level, ['safely-danger', 'safely-general', 'safely-safe']);
  });

  var isTel = false;

  $('[name=mobile-phone]').blur(function() {
    var str = $('[name=mobile-phone]').val();

    if (str === '') {
      $('[name=lose-mobile-phone]').show();
    } else if (!isTelephone(str)) {
      $('[name=lose-mobile-phone]').hide();
      $('[name=wrong-mobile-phone]').show();
    } else {
      $('[name=wrong-mobile-phone]').hide();
      $('[name=lose-mobile-phone]').hide();
      isTel = true;
    }
  });

  function isTelephone(str) {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return reg.test(str);
  }

  var isEmail = false;

  $('[name=email]').blur(function() {
    var str = $('[name=email]').val();

    if (str === '') {
      $('[name=lose-email]').show();
    } else if (!isEmailName(str)) {
      $('[name=wrong-email]').show();
      $('[name=lose-email]').hide();
    } else {
      $('[name=lose-email]').hide();
      $('[name=wrong-email]').hide();
      isEmail = true;
    }
  });

  function isEmailName(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  }

  var isPassword = false;

  $('[name=password]').blur(function() {
    var str = $('[name=password]').val();

    if (str === '') {
      $('[name=lose-password]').show();
    } else if (str.length < 8 || str.length > 16) {
      $('[name=wrong-password]').show();
      $('[name=lose-password]').hide();
    } else {
      $('[name=lose-password]').hide();
      $('[name=wrong-password]').hide();
      isPassword = true;
    }
  });

  var checkbox = $('.agree-check');
  var isChecked = false;

  function register() {
    $('#registration').modal('show');
    var mobilePhone = $('[name=mobile-phone]').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    request.post('/register')
      .set('Content-Type', 'application/json')
      .send({
        mobilePhone: mobilePhone,
        email: email,
        password: password
      })
      .end(function(err, req) {
        var data = JSON.parse(req.text);

        if (req.status === 200) {
          $('#register-info').text(data.message);
          window.setTimeout(jumpToStart, 5000);
        } else {
          $('#register-info').text(data.message);
        }
      });
  }

  function jumpToStart() {
    location.href = "start.html"
  }

  $("#register-btn").on('click', function(evt) {
    if (!checkbox.prop("checked")) {
      $('#agree-check').modal('show');
    } else {
      isChecked = true;
    }
    if (isTel && isEmail && isPassword && isChecked) {
      register();
    } else {
      evt.preventDefault();
    }
  });


});
