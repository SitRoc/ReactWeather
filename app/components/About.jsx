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
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I have built this for a course.</p>
      <p>
        Here are some of the tools I used.
      </p>
      <ol>
        <li>
          <a href="https://github.com/facebook/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
