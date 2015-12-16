var $ = global.jQuery = require('jquery');
var request = require('superagent');
var React = require('react');
var ReactDOM = require('react-dom');
require("bootstrap");

$(function () {
  $('#submitModal').on('show.bs.modal', function () {
    $('.modal-content').css('margin-top', '230px');
  });

  var boxes;

  request.get('/answer')
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        boxes = res.body.initializedBox;
        console.log(boxes);

        var InitializedBox = React.createClass({
          render: function () {
            var boxes = [];
            for(var i=1;i<10;i++){
              boxes.push(<li key={i}>{this.props.boxes[i]}</li>);
            }
            return <div className="logic-title">
              <div className="box-number">
                <ol>
                  <strong>BoxNo.</strong>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ol>
              </div>
              <div className="box">
                <ol>
                  <li className="no-display"/>
                  {boxes}
                </ol>
              </div>
            </div>;
          }
        });
        ReactDOM.render(<InitializedBox boxes={boxes} />,document.getElementById('InitializedBox'));
      });





});