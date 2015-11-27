
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    PropertyModule = require("./ui/PropertyModule"),
    mountNode = document.getElementById("app");

var PropertyApp = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Property Shortlist</h3>
        <PropertyModule />
      </div>
    );
  }
});


ReactDOM.render(<PropertyApp />, mountNode);
