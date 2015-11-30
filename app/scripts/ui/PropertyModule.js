'use strict';

var React = require('react'),
    PropertyList = require('./PropertyList'),
    SavedList = require('./SavedList');

var PropertyModule = React.createClass({
    removeProperty: function(key) {
      var newPropertyList = this.state.propertyList;
      var removedProperty = this.state.savedList[key];
      newPropertyList.splice(0,0,removedProperty);
      this.setState({propertyList: newPropertyList});
      var newSavedList = this.state.savedList;
      newSavedList.splice(key, 1);
      this.setState({savedList: newSavedList});
    },
    addProperty: function(key) {
      var newSavedList = this.state.savedList;
      var newProperty = this.state.propertyList[key];
      newSavedList.splice(0,0,newProperty);
      this.setState({savedList: newSavedList});
      var newPropertyList = this.state.propertyList;
      newPropertyList.splice(key, 1);
      this.setState({propertyList: newPropertyList});
    },
    getInitialState: function(){
        return {
          propertyList: this.props.propertyData.results,
          savedList: this.props.propertyData.saved
        }
    },
    render: function() {
        var propModule = this;
        return (
          <div>
            <PropertyList listName="Results" listData={propModule.state.propertyList} isSaveList={false} removeProperty={propModule.removeProperty} addProperty={propModule.addProperty} />
            <PropertyList listName="Saved" listData={propModule.state.savedList} isSaveList={true} removeProperty={propModule.removeProperty} addProperty={propModule.addProperty} />
          </div>
        );
      }
});


module.exports = PropertyModule;
