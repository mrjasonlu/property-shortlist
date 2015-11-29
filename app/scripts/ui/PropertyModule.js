'use strict';

var React = require('react'),
    PropertyList = require('./PropertyList'),
    SavedList = require('./SavedList');

var PropertyModule = React.createClass({
  getInitialState: function(){
    return {
      propertyList: this.props.propertyData.results,
      savedList: this.props.propertyData.saved
    }
  },
  render: function() {
    return (
      <div>
        <PropertyList listData={this.state.propertyList} />
        <SavedList listData={this.state.savedList} />
      </div>
    );
  }
});


module.exports = PropertyModule;
