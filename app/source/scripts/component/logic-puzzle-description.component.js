var React = require('react');

var LogicPuzzleDescription = React.createClass({

  render: function() {
    return (
        <div className="right-description">
            <ol>
              {this.props.description.filter((val) => {
                return val != '';
              }).map((description, idx) => {
                return (
                    <li key={idx}>
                      <div>{description}</div>
                    </li>
                )
              })}
            </ol>
        </div>
    )
  }
});

module.exports = LogicPuzzleDescription;
