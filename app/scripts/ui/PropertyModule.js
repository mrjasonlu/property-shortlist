'use strict';

var React = require('react'),
    PropertyList = require('./PropertyList');

var PropertyModule = React.createClass({
  getInitialState: function(){
    return {
      propertyList: this.props.propertyData.results,
      savedList: this.props.propertyData.saved
    }
  },
  render: function() {
    return (
      <PropertyList listData={this.state.propertyList} />
    );
  }
});


module.exports = PropertyModule;
