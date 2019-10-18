import React from 'react';
import PropTypes from 'prop-types'; 
import logo from './logo.svg';
import './App.css';

let textColor = {
  color: 'green',
  fontFamily: 'PingFangSC-Medium'
}

class App extends React.Component {
  constructor () {
    super ()
  }
  // 这constructor是默认存在的(es6)
  render () {
    var obj = this.props.obj
    return Element
  };
}

App.propTypes = {
  name: propTypes.string.isRequired,
  end: propTypes.string.isRequired
}

// console.log(obj)
var Element =  (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={textColor}>Hello, TanYi</h1>
    </header>
  </div>
)

console.log("TCL: React", React)

export default App;
