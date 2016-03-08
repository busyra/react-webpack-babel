var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  //all components need a render
  render: function (){
    return(
      <div> Hello world {this.props.name} !!! </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
