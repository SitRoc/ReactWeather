var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Stateless function, this is only used when Components have only the render function
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to about page!</p>
    </div>
  )
};

module.exports = About;
