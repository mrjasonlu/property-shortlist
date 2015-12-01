'use strict';

var React = require('react'),
    PropertyItem = require('./PropertyItem');

var PropertyList = React.createClass({
  //function to pass remove property function down to proerty item
  handleRemove: function(key) {
      this.props.removeProperty(key);
  },
  //function to pass add property function down to proerty item
  handleAdd: function(key) {
      this.props.addProperty(key);
  },
  //render property item
  render: function() {
    var saveList = this.props.isSaveList,
        handleRemoveFunction = this.handleRemove,
        handleAddFunction = this.handleAdd;
    return (
        <div className="col-xs-12 col-sm-6">
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
