'use strict';

var React = require('react'),
    PropertyItem = require('./PropertyItem');

var SavedList = React.createClass({
  render: function() {
    return (
        <div className="col-xs-6">
          <h2>Saved</h2>
            {
              this.props.listData.map(function(property, i) { //if array, process each object
                return <div><PropertyItem propData={property} saved={true} key={i} /></div>
              })
            }
        </div>
    );
  }
});


module.exports = SavedList;
