var React = require('react');

var LogicPuzzleDescription = React.createClass({

  render: function() {
    return (
        <div className="right-text">
          <div className="text-description">
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
        </div>
    )
  }
});

module.exports = LogicPuzzleDescription;
