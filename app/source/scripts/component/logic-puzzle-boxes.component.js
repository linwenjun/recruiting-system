var React = require('react');
var Reflux = require('reflux');

var LogicPuzzleBoxes = React.createClass({
  render: function() {
    return (
      <div className="logic-title">
        <div className="box">
          <div>BoxNo.</div>
          <ol>
            {this.props.boxes.filter(function(val, key) {
              return key > 0;
            }).map(function(box, idx) {
              return (
                <li key={idx}>
                  <div>{idx+1}</div>
                  <div className="num">{box}</div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
})

module.exports = LogicPuzzleBoxes;
