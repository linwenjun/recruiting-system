var React = require('react');

var LogicPuzzleBoxes = React.createClass({

  render: function () {
    return (
        <div className="logic-title">
          <div className="box">
            <div>BoxNo.</div>
            <ol>
              {this.props.boxes.filter((val, key) => {
                return key > 0;
              }).map((box, idx) => {
                return (
                    <li key={idx}>
                      <div>{idx + 1}</div>
                      <div className="num">{box}</div>
                    </li>
                )
              })}
            </ol>
          </div>
        </div>
    )
  }
});

module.exports = LogicPuzzleBoxes;
