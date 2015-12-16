var React = require('react');
var Reflux = require('reflux');

var LogicPuzzleStore  = require('../store/logic-puzzle-store');
var LogicPuzzleActions = require('../actions/logic-puzzle-actions');

var LogicPuzzleBoxes = require('./logic-puzzle-boxes.component');

var LogicPuzzle = React.createClass({
  mixins: [Reflux.connect(LogicPuzzleStore, 'item')],

  getInitialState: function() {
    return {
      item: {
        initializedBox: []
      }
    };
  },

  componentDidMount: function() {
    LogicPuzzleActions.loadItem();
  },

  render: function() {
    return (<LogicPuzzleBoxes boxes={this.state.item.initializedBox} />)
  }
})

module.exports = LogicPuzzle;
