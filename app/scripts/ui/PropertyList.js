'use strict';

var React = require('react'),
    PropertyItem = require('./PropertyItem');

var PropertyList = React.createClass({
  render: function() {
    return (
        <div className="col-xs-6">
          <h2>Results</h2>
            {
              this.props.listData.map(function(property, i) { //if array, process each object
                return <div><PropertyItem propData={property} saved={false} key={i} /></div>
              })
            }
        </div>
    );
  }
});


module.exports = PropertyList;
