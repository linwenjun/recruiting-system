var express = require('express');
var router = express.Router();
var request = require('superagent');

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

  if (!checkLoginInfo(account, password)) {
    res.send({
      message: '登录失败',
      status: 403
    })
  } else {
    request
      .post('http://localhost:8080/api/login')
      .set('Content-Type', "application/json")
      .send({
        email: account,
        password: password
      })
      .end(function(err, result) {
        res.send({
          status: result.status
        });
      })
  }
});

module.exports = router;
