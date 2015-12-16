var express = require('express');
var router = express.Router();
var request = require('superagent');

router.get('/', function(req, resp) {

  request
      .get('http://localhost:8080/api/logic-puzzle/5')
      .set('Content-Type', 'application/json')
      .end(function(err, res){
        resp.send({
          initializedBox: JSON.parse(res.body.initializedBox),
          questionZh: res.body.questionZh,
          descriptionZh: JSON.parse(res.body.descriptionZh),
          chartPath: res.body.chartPath
        });
      });

});

module.exports = router;
