var $ = global.jQuery = require('jquery');
var ReactDOM = require('react-dom');
var React = require('react');
require("bootstrap");

var Answer = require('./component/answer.component');

$('#submitModal').on('show.bs.modal', function () {
  $('.modal-content').css('margin-top', '230px');
});

ReactDOM.render(<Answer/>, document.getElementById('answer-react'));
