
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    PropertyModule = require("./ui/PropertyModule"),
    mountNode = document.getElementById("app"),
    propertyAPI = "./properties.json"

    //grab property array from JSON data
    $.getJSON( propertyAPI, {
      format: "json"
    }).done(function( json ) {
          //on success, render Property Module
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
      // console log error if failed.
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
      });
