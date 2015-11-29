
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    PropertyModule = require("./ui/PropertyModule"),
    mountNode = document.getElementById("app"),
    propertyAPI = "./properties.json"

    $.getJSON( propertyAPI, {
      format: "json"
    }).done(function( json ) {
          var PropertyApp = React.createClass({
              render: function() {
              return (
                  <div>
                    <PropertyModule propertyData={json} />
                  </div>
              );
            }
          });
          ReactDOM.render(<PropertyApp />, mountNode);
      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
      });
