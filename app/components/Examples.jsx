var React = require('react');

// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Examples</h3>
//     );
//   }
// });

// Stateless function, this is only used when Components have only the render function
var Examples = (props) => {
  return (
    <div>
      <h3>Examples</h3>
      <p>Welcome to examples page!</p>
    </div>
  )
};

module.exports = Examples;
