var $ = global.jQuery = require('jquery');
var ReactDom = require("react-dom");

require("bootstrap");
var request = require("superagent");

var RegisterApp = require('./component/register-app.component');

ReactDom.render(
    <RegisterApp />,
    document.getElementById('register-container')
);

$(function() {

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
  var isEmail = false;
  var isPassword = false;

  function isTelephone(str) {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return reg.test(str) && str.toString().length === 11;
  }

  function isEmailName(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  }

  function verifyMobilePhone() {
    var $mobilePhone = $('[name=mobile-phone]');

    if ($mobilePhone.val() === '') {
      $('[name=wrong-mobile-phone]').hide();
      $('[name=lose-mobile-phone]').show();
      isTel = false;
    } else if (!isTelephone($mobilePhone.val())) {
      $('[name=lose-mobile-phone]').hide();
      $('[name=wrong-mobile-phone]').show();
      isTel = false;
    } else {
      $('[name=wrong-mobile-phone]').hide();
      $('[name=lose-mobile-phone]').hide();
      isTel = true;
    }

    if (isTel) {
      request.get('/register/validate-mobile-phone')
        .set('Content-Type', 'application/json')
        .query({
          mobilePhone: $mobilePhone.val()
        })
        .end(function(err, req) {
          if(req.body.status === 200) {
            $('[name=exist-mobile-phone]').show();
            $('[name=mobile-phone]').data('is-mobile-phone-exist', true);
          }else {
            $('[name=exist-mobile-phone]').hide();
            $('[name=mobile-phone]').data('is-mobile-phone-exist', false);
          }
        });
    }
  }

  function verifyEmail() {
    var str = $('[name=email]').val();

    if (str === '') {
      $('[name=wrong-email]').hide();
      $('[name=lose-email]').show();
      isEmail = false;
    } else if (!isEmailName(str)) {
      $('[name=wrong-email]').show();
      $('[name=lose-email]').hide();
      isEmail = false;
    } else {
      $('[name=lose-email]').hide();
      $('[name=wrong-email]').hide();
      isEmail = true;
    }
  }

  function verifyPassword() {
    var str = $('[name=password]').val();

    if (str === '') {
      $('[name=wrong-password]').hide();
      $('[name=lose-password]').show();
      isPassword = false;
    } else if (str.length < 8 || str.length > 16) {
      $('[name=wrong-password]').show();
      $('[name=lose-password]').hide();
      isPassword = false;
    } else {
      $('[name=lose-password]').hide();
      $('[name=wrong-password]').hide();
      isPassword = true;
    }
  }

  $('[name=mobile-phone]').blur(function() {
    verifyMobilePhone();
  });

  $('[name=email]').blur(function() {
    verifyEmail();
  });


  $('[name=password]').blur(function() {
    verifyPassword();
  });

  function jumpToStart() {
    location.href = "start.html"
  }

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

        $('#register-info').text(data.message);
        if (data.status === 200) {
          window.setTimeout(jumpToStart, 5000);
        } else {}
      });
  }

  var checkbox = $('.agree-check');
  var isChecked = false;

  function checkRegisterData (){
    verifyMobilePhone();
    verifyEmail();
    verifyPassword();

    if (!checkbox.prop("checked")) {
      $('#agree-check').modal('show');
    } else {
      isChecked = true;
    }
  }

  $("#register-btn").on('click', function() {
    checkRegisterData();
    var isMobilePhoneExist = $('[name=mobile-phone]').data('is-mobile-phone-exist');
    if (!isMobilePhoneExist && isTel && isEmail && isPassword && isChecked) {
      register();
    }
  });
});
