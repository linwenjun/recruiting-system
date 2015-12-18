var React = require('react');

var LogicPuzzleChart = React.createClass({

  render: function () {
    return (
        <div className="left-chart">
          <img src={this.props.chartPath} alt="逻辑题图片"/>
        </div>
    )
  }
});

module.exports = LogicPuzzleChart;
