var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Valletta">Valletta, MT</Link>
        </li>
        <li>
          <Link to="/?location=London">London, UK</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
