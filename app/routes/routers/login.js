var express = require('express');
var router = express.Router();

function checkLoginInfo(account, password) {
  var pass = true;
  var verifyMobilePhone = /^1[3|4|5|8][0-9]\d{4,8}$/;
  var verifyEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

  var isValid = verifyMobilePhone.test(account) || verifyEmail.test(account);

  if (!isValid) {
    pass = false;
  }

  if (password.length < 8 || password.length > 16) {
    pass = false;
  }

  return pass;
}

router.get('/', function(req, res) {
  var account = req.query.account;
  var password = req.query.password;
  var result = {};

  if (checkLoginInfo(account, password)) {

    result.status = 201;
    result.message = '登陆成功';
    res.send(result);
  } else {

    result.message = '登录失败';
    result.status = 403;
    res.send(result);
  }
});

module.exports = router;
