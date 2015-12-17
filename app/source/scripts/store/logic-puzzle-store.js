var Reflux = require('reflux');
var LogicPuzzleActions = require('../actions/logic-puzzle-actions');
var request = require('superagent');

var LogicPuzzleStore = Reflux.createStore({
  listenables: [LogicPuzzleActions],

  onLoadItem: function() {
    this.updateItem();
  },

  updateItem: function() {
    var that = this;
    request.get('/answer')
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          that.item = res.body;
          that.trigger(res.body);
        });
  }
});

module.exports = LogicPuzzleStore;
