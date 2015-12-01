'use strict';

var React = require('react'),
    PropertyList = require('./PropertyList'),
    SavedList = require('./SavedList');

var PropertyModule = React.createClass({
    //function to remove property from saved list and add back into results
    removeProperty: function(key) {
      var newSavedList = this.state.savedList;
      //if array item is valid
      if(newSavedList[key]){
          newSavedList.splice(key, 1);
          this.setState({savedList: newSavedList});
      }
    },
    //function to add property to saved list and remove from results
    addProperty: function(key) {
        var newSavedList = this.state.savedList,
            newProperty = this.state.propertyList[key],
            propertyExists = false;

        //if array property item is valid
        if(newProperty){
            //check if property id already exists in saved list
            for(var i=0; i<newSavedList.length; i++){
                if(newProperty.id == newSavedList[i].id){
                    propertyExists = true;
                    break;
                }
            }
            if(!propertyExists){
                //if property does not exist in saved list, push to list
                newSavedList.push(newProperty);
                this.setState({savedList: newSavedList});
            }
        }
    },
    getInitialState: function(){
        //set initial property and saved list from JSON data
        return {
          propertyList: this.props.propertyData.results,
          savedList: this.props.propertyData.saved
        }
    },
    render: function() {
        //render results and saved list
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
