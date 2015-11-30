'use strict';

var React = require('react'),
    PropertyItem = require('./PropertyItem');

var PropertyList = React.createClass({
  handleRemove: function(key) {
      console.log(" list remove "+ key );
      this.props.removeProperty(key);
  },
  handleAdd: function(key) {
      console.log(" list add "+ key );
      this.props.addProperty(key);
  },
  render: function() {
    var saveList = this.props.isSaveList,
        handleRemoveFunction = this.handleRemove,
        handleAddFunction = this.handleAdd;
    return (
        <div className="col-xs-6">
          <h2>{this.props.listName}</h2>
            {
              this.props.listData.map(function(property, i) { //if array, process each object
                  return <PropertyItem key={i} arrayKey={i} propData={property} saved={saveList} removeProperty={handleRemoveFunction} addProperty={handleAddFunction} />
              })
            }
        </div>
    );
  }
});


module.exports = PropertyList;
