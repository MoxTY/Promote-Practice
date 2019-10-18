import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let obj = {
  name: 'JIUji',
  end: '成功通过'
}

ReactDOM.render(
  <App obj={obj} />,
  document.getElementById('root')
);

function tick () {
  const time = (
    <div>
      <h2> It is {new Date().toLocaleTimeString()} </h2>
    </div>
  )
  ReactDOM.render(
    time,
    document.getElementById('section')
  );
}

setInterval (tick, 1000)


