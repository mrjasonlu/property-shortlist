'use strict';

var React = require('react'),
    PropertyList = require('./PropertyList')

var PropertyModule = React.createClass({
  render: function() {
    return (
      <PropertyList />
    );
  }
});


module.exports = PropertyModule;
