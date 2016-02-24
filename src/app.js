import React from 'react';
import ReactDOM from 'react-dom';
import Root from './scripts/containers/Root';
import './manifest.json'
import '../static/icon.png';
import 'stylesheets/main';

let el = document.createElement('div');
el.className = 'Pumgrana__ac863f3';
document.body.appendChild(el);

ReactDOM.render(<Root />, document.querySelector('.Pumgrana__ac863f3'));
