'use strict';

var React = require('react')

var PropertyItem = React.createClass({
    render: function() {
      var agentStyle = { backgroundColor: this.props.propData.agency.brandingColors.primary
                       };
      var property = this.props.propData;
      return (
        <div className="prop-item">
            <div className="prop-btn-wrapper"><button className="prop-btn">{this.props.saved ? "Remove" : "Add" }</button></div>
            <div className="prop-id" style={agentStyle}><span>{property.id}</span></div>
            <div className="prop-image"><img src={property.mainImage} /></div>
            <div className="prop-price">{property.price}</div>
            <div className="prop-agent"><img src={property.agency.logo} /></div>
        </div>
      );
    }
});


module.exports = PropertyItem;
