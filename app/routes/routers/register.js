var express = require('express');
var router = express.Router();
var request = require('superagent');
var constant = require('../../tools/back-constant.json')

function checkRegisterInfo(registerInfo) {
  var pass = true;
  if (registerInfo.mobilePhone.length !== constant.MOBILE_PHONE_LENGTH) {
    pass = false;
  }

  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!reg.test(registerInfo.email)) {
    pass = false;
  }
  if (registerInfo.password.length < constant.PASSWORD_MIN_LENGTH ||
      registerInfo.password.length > constant.PASSWORD_MAX_LENGTH) {
    pass = false;
  }
  return pass;
}

router.post('/', function(req, res) {
  var registerInfo = req.body;

  if (checkRegisterInfo(registerInfo)) {
    request
      .post('http://localhost:8080/api/register')
      .set('Content-Type', 'application/json')
      .send(registerInfo)
      .end(function(err, result) {
        res.send({
          status: result.status,
          message: constant.REGISTER_SUCCESS
        });
      });
  } else {
    res.send({
      message: constant.REGISTER_FAILED,
      status: constant.FAILING_STATUS
    });
  }
});

router.get('/validate-mobile-phone', function(req, res) {
  request.get('http://localhost:8080/api/user')
    .set('Content-Type', 'application/json')
    .query({
      field: 'mobilePhone',
      value: req.query.mobilePhone
    })
    .end(function(err, result) {
      if(result.body.user) {
        res.send({
          status: constant.SUCCESSFUL_STATUS
        });
      }else {
        res.send({
          status: constant.FAILING_STATUS
        });
      }
    });
});

module.exports = router;
