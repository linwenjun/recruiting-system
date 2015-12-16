$(function() {
  var loginPassword = false;
  var isPhoneEmail = false;

  $('[name=phone-email]').blur(function() {
    var str = $('[name=phone-email]').val();

    if (str === '') {
      $('[name=lose-phone-email]').show();
    } else if (!isEmailName(str) && !isTelephone(str)) {
      $('[name=wrong-phone-email]').show();
      $('[name=lose-phone-email]').hide();
    } else {
      $('[name=lose-phone-email]').hide();
      $('[name=wrong-phone-email]').hide();
      isPhoneEmail = true;
    }
  });

  $('[name=login-password]').blur(function() {
    var str = $('[name=login-password]').val();

    if (str === '') {
      $('[name=lose-login-password]').show();
    } else if (str.length < 8 || str.length > 16) {
      $('[name=wrong-login-password]').show();
      $('[name=lose-login-password]').hide();
    } else {
      $('[name=lose-login-password]').hide();
      $('[name=wrong-login-password]').hide();
      isLoginPassword = true;
    }
  });

  function isTelephone(str) {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return reg.test(str);
  }

  function isEmailName(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  }

  function jumpToStart() {
    location.href = "start.html"
  }

  $("#login-btn").on('click', function(evt) {
    if (isPhoneEmail && isLoginPassword) {
      $.get('/login', function(req, res) {

      });
    } else {
      evt.preventDefault();
    }
  });

});
