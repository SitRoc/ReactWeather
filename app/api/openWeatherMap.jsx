var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=86c30616221041a9c06f81b7de2a739f&units=metric';

// 86c30616221041a9c06f81b7de2a739f

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    // Build the URL - here ES6 functions are used.
    // Used the backticks instead of normal inverted commas,
    // -- this enables us to inject variables right inside
    // -- the string using the ${}
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function(res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    })
  }
}
