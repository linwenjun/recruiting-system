var express = require('express');
var router = express.Router;

function checkRegisterInfo(registerInfo){
  var pass = true;
  if (registerInfo.tel.length !== 11){
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

router.post('/register', function(req, res){
  var registerInfo = req.body;
  var result = {};

  if (checkRegisterInfo(registerInfo)){
    result.massage = '注册成功';
    result.status = 200;
    result.data = '';
  }else {
    result.massage = '注册失败,注册信息有误';
    result.status = 403;
    result.data = '';
  }
  res.send(result);
});

module.exports = router;
