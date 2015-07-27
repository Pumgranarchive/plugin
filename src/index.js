import React from 'react';
import App from './scripts/containers/App';
import 'stylesheets/main';

document.body.innerHTML += '<div class="App" style="left:-10px"></div>';
React.render(<App />, document.querySelector('.App'));
