var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      // location: 'Miami',
      // temp: 88
      isLoading: false
    }
  },
  handleSearch: function (location){

    // Adding a that variable to reference the Weather class within the
    // -- openWeatherMap.getTemp call.
    var that = this;

    //debugger;

    this.setState( { isLoading: true } );

    openWeatherMap.getTemp(location).then( function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState( { isLoading: false } );
      alert(errorMessage);
    } );
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function(){
    var { temp, location, isLoading } = this.state;

    function renderMessage () {
      if ( isLoading ) {
        return <h3>Fetching Weather ...</h3>;
      } else if ( temp && location ) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>WeatherComponent</h3>
        <WeatherForm onSearch={ this.handleSearch }/>
        { renderMessage() }
      </div>
    );
  }
});

module.exports = Weather;
