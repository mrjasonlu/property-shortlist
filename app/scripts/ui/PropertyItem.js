'use strict';

var React = require('react')

var PropertyItem = React.createClass({
    handleClick: function() {
        var props = this.props;
        if(props.saved){ //if property is in saved list, remove from list
            console.log("remove "+ props.arrayKey );
            props.removeProperty(props.arrayKey);
        } else { //if property is not saved, save to list
            console.log("save "+ props.arrayKey );
            props.addProperty(props.arrayKey);
        }
    },
    render: function() {
      var agentStyle = { backgroundColor: this.props.propData.agency.brandingColors.primary
                       };
      var property = this.props.propData;
      return (
        <div className="prop-item">
            <div className="prop-btn-wrapper"><button onClick={this.handleClick} className="prop-btn">{this.props.saved ? "Remove" : "Add" }</button></div>
            <div className="prop-id" style={agentStyle}><span>{property.id}</span></div>
            <div className="prop-image"><img src={property.mainImage} /></div>
            <div className="prop-price">{property.price}</div>
            <div className="prop-agent"><img src={property.agency.logo} /></div>
        </div>
      );
    }
});

module.exports = PropertyItem;
