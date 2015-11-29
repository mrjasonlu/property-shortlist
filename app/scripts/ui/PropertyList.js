'use strict';

var React = require('react');

var PropertyList = React.createClass({
  componentWillMount: function() {

  },  
  render: function() {
    return (
        <div>
          <h2>Property List</h2>
        {this.listData}
        </div>
    );
  }
});


module.exports = PropertyList;
