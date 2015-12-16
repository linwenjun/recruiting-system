var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var LogicPuzzleBoxes = React.createClass({

  forword: function(box) {
    if('function' === typeof this.props.onChangeItem) {
      this.props.onChangeItem(_(1).range(40).value());
    }
  },

  render: function() {
    return (
      <div className="logic-title">
        <div className="box">
          <div>BoxNo.</div>
          <ol>
            {this.props.boxes.filter((val, key) => {
              return key > 0;
            }).map((box, idx) => {
              return (
                <li key={idx} onClick={this.forword.bind(this, box)}>
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
