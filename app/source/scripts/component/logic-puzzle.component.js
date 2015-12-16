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

  changeItem: function(idx) {
    console.log(idx);
  },

  render: function() {
    return (<LogicPuzzleBoxes onChangeItem={this.changeItem} boxes={this.state.item.initializedBox} />)
  }
})

module.exports = LogicPuzzle;
