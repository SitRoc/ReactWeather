var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//
//     return (
//       <h3>It is {temp} in {location}</h3>
//     );
//   }
// });

// 1. Stateless function, this is only used when Components have only the render function

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (
//     <h3>It is {temp} in {location}</h3>
//   );
// };

// 2. Stateless Function with argument restructuring.

var WeatherMessage = ( { temp, location } ) => {
  return (
    <h3>It is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
