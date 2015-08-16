import React from 'react';
import App from './scripts/containers/App';
import 'stylesheets/main';

let el = document.createElement('div');
el.className = 'App';
document.body.appendChild(el);
React.render(<App />, document.querySelector('.App'));
