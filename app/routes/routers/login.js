var express = require('express');
var router = express.Router();
var request = require('superagent');
var constant = require('../../tools/back-constant.json');

function checkLoginInfo(account, password) {
  var pass = true;
  var verifyMobilePhone = /^1[3|4|5|8][0-9]\d{4,8}$/;
  var verifyEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

  var isValid = verifyMobilePhone.test(account) || verifyEmail.test(account);

  if (!isValid) {
    pass = false;
  }

  if (password.length < constant.PASSWORD_MIN_LENGTH ||
      password.length > constant.PASSWORD_MAX_LENGTH) {
        pass = false;
  }

  return pass;
}

router.get('/', function(req, res) {
  var account = req.query.account;
  var password = req.query.password;

  if (!checkLoginInfo(account, password)) {
    res.send({
      message: constant.LOGIN_FAILED,
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
