import React from 'react';

var Element =  (
  <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
  </div>
)

class Time extends React.Component {
  render () {
    return Element
  };
}

export default Time;
