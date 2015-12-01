jest.dontMock('../PropertyModule');
jest.dontMock('../PropertyList');
jest.dontMock('../Propertyitem');

describe('PropertyModule', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        PropertyModule = require('../PropertyModule'),
        PropertyList = require('../PropertyList'),
        PropertyItem = require('../PropertyItem'),
        propertyModule = null,
        jsonData = {
      "results": [{
            "price": "$726,500",
            "agency": {
                "brandingColors": {
                    "primary": "#ffe512"
                },
                "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
            },
            "id": "1",
            "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
        }, {
            "price": "$560,520",
            "agency": {
                "brandingColors": {
                    "primary": "#fcfa3b"
                },
                "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
            },
            "id": "2",
            "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
        }, {
            "price": "$826,500",
            "agency": {
                "brandingColors": {
                    "primary": "#57B5E0"
                },
                "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
            },
            "id": "3",
            "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
        }],

        "saved": [{
            "price": "$526,500",
            "agency": {
                "brandingColors": {
                    "primary": "#000000"
                },
                "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
            },
            "id": "4",
            "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
        }]
    };

  beforeEach(function() {
      propertyModule = TestUtils.renderIntoDocument(<PropertyModule propertyData={jsonData} />);
  });

  it('should pass proertyList containing 3 items', function() {
      //results list should contain 3 properties from JSON data
      expect(propertyModule.state.propertyList.length).toBe(3);
  });

  it('should pass savedList containing 1 item', function() {
      //saved list should contain 1 property from JSON data
      expect(propertyModule.state.savedList.length).toBe(1);
  });

  it('should be able to add a property to saved list', function() {
      propertyModule.addProperty(0);
      //saved properties should contain 2 properties now
      expect(propertyModule.state.savedList.length).toBe(2);
  });

  it('should be able to remove a property from the saved list', function() {
      propertyModule.removeProperty(0);
      //saved properties should contain 1 properties now
      expect(propertyModule.state.savedList.length).toBe(1);
  });

  describe('PropertyList', function() {

      var propertyList = null,
          resultsData = [{
                  "price": "$726,500",
                  "agency": {
                      "brandingColors": {
                          "primary": "#ffe512"
                      },
                      "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
                  },
                  "id": "1",
                  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
              }, {
                  "price": "$560,520",
                  "agency": {
                      "brandingColors": {
                          "primary": "#fcfa3b"
                      },
                      "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
                  },
                  "id": "2",
                  "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
              }, {
                  "price": "$826,500",
                  "agency": {
                      "brandingColors": {
                          "primary": "#57B5E0"
                      },
                      "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
                  },
                  "id": "3",
                  "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
              }];

      beforeEach(function() {
          propertyList = TestUtils.renderIntoDocument(<PropertyList listName="Results" listData={resultsData} isSaveList={false} removeProperty={propertyModule.removeProperty} addProperty={propertyModule.addProperty} />);
      });

      it('should contain passed property result list containg 3 items', function() {
          //should be able to pass a property array
          expect(propertyList.props.listData.length).toBe(3);
      });

      it('should contain passed listName', function() {
          //should be able to pass a property array
          expect(propertyList.props.listName).toBe("Results");
      });

      it('should contain passed listName', function() {
          //should be able to pass a property array
          expect(propertyList.props.listName).toBe("Results");
      });

      it('should be able to handle removeProperty function', function() {
          //remove last saved property, should have 0 items left
          propertyList.props.removeProperty(0);
          expect(propertyModule.state.savedList.length).toBe(0);
      });

      it('should be able to handle addProperty function', function() {
          //add one property to saved list, should have 1 item
          propertyList.props.addProperty(0);
          expect(propertyModule.state.savedList.length).toBe(1);
      });

      describe('PropertyItem', function() {
          var propertyItem = null,
              propertyData = {
                                "price": "$560,520",
                                "agency": {
                                    "brandingColors": {
                                        "primary": "#fcfa3b"
                                    },
                                    "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
                                },
                                "id": "2",
                                "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
                            };

          beforeEach(function() {
              propertyItem = TestUtils.renderIntoDocument(<PropertyItem key={1} arrayKey={1} propData={propertyData} saved={false} removeProperty={propertyModule.removeProperty} addProperty={propertyModule.addProperty} />);
          });

          it('should have been passed propertyData', function() {
              expect(propertyItem.props.propData.price).toBe("$560,520");
          });

          it('should be able to add property', function() {
              //add another property to saved list, should have 2 item
              propertyItem.props.addProperty(1);
              expect(propertyModule.state.savedList.length).toBe(2);
          });

          it('should be able to remove property', function() {
              //add another property to saved list, should have 2 item
              propertyItem.props.removeProperty(1);
              expect(propertyModule.state.savedList.length).toBe(1);
          });

      });//end PropertyItem
  });//end PropertyList
});//end PropertyModule
