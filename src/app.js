import React from 'react';
import ReactDom from 'react-dom';
import App from './components';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App />, container);
