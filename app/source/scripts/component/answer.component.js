var React = require('react');

var LogicPuzzle = require('./logic-puzzle.component');
var LogicPuzzleSidebar = require('./logic-puzzle-sidebar.component');


var Answer = React.createClass({


  render: function () {
    return (

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-sm-8 ">
              <LogicPuzzle />
            </div>

            <div className="col-md-3 col-sm-4">
              <LogicPuzzleSidebar/>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = Answer;
