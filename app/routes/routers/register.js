var express = require('express');
var router = express.Router();
var request = require('superagent');

function checkRegisterInfo(registerInfo) {
  var pass = true;
  if (registerInfo.mobilePhone.length !== 11) {
    pass = false;
  }

  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!reg.test(registerInfo.email)) {
    pass = false;
  }

  if (registerInfo.password.length < 8 || registerInfo.password.length > 16) {
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
          message: '注册成功！5秒后跳转至答题页面。'
        });
      });
  } else {
    res.send({
      message: '注册失败,注册信息有误',
      status: 403
    });
  }
});

router.get('/validate-mobilePhone', function(req, res) {
  request.get('http://localhost:8080/api/user')
    .set('Content-Type', 'application/json')
    .query({
      field: 'mobilePhone',
      value: req.query.mobilePhone
    })
    .end(function(err, result) {
      if(result.body.user) {
        res.send({
          status: 200
        });
      }else {
        res.send({
          status: 404
        });
      }
    });
});

module.exports = router;
