import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className="hello">{ title }</div>,
  document.getElementById('root')
);
