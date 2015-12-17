var React = require('react');
var Reflux = require('reflux');

var LogicPuzzleStore = require('../store/logic-puzzle-store');
var LogicPuzzleActions = require('../actions/logic-puzzle-actions');

var LogicPuzzleBoxes = require('./logic-puzzle-boxes.component');
var LogicPuzzleChart = require('./logic-puzzle-chart.component');
var LogicPuzzleDescription = require('./logic-puzzle-description.component');

var LogicPuzzle = React.createClass({
  mixins: [Reflux.connect(LogicPuzzleStore, 'item')],

  getInitialState: function () {
    return {
      item: {
        initializedBox: [],
        chartPath: '',
        descriptionZh: []
      }
    };
  },

  componentDidMount: function () {
    LogicPuzzleActions.loadItem();
  },

  render: function () {
    return (
        <div>
          <LogicPuzzleBoxes boxes={this.state.item.initializedBox}/>
          <LogicPuzzleChart chartPath={this.state.item.chartPath}/>
          <LogicPuzzleDescription description={this.state.item.descriptionZh}/>
        </div>
    )
  }
});

module.exports = LogicPuzzle;
