'use strict';

var React = require('react')

var PropertyItem = React.createClass({
    //function to handle user click, and decide whether it should be added or removed from saved list
    handleClick: function() {
        var props = this.props;
        if(props.saved){ //if property is in saved list, remove from list
            props.removeProperty(props.arrayKey);
        } else { //if property is not saved, save to list
            props.addProperty(props.arrayKey);
        }
    },
    render: function() {
      var agentStyle = { backgroundColor: this.props.propData.agency.brandingColors.primary};
      var property = this.props.propData;
      //render property item
      return (
        <div className="prop-item">
            <div className="prop-btn-wrapper" onClick={this.handleClick}><button onClick={this.handleClick} className={this.props.saved ? "prop-btn remove" : "prop-btn add" }>{this.props.saved ? "Remove" : "Add" }</button></div>
            <div className="prop-id" style={agentStyle}><span>{property.id}</span></div>
            <div className="prop-image"><img src={property.mainImage} /></div>
            <div className="prop-price">{property.price}</div>
            <div className="prop-agent"><img src={property.agency.logo} /></div>
        </div>
      );
    }
});

module.exports = PropertyItem;
