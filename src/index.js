import React from 'react';
import App from './scripts/containers/App';
import 'stylesheets/main';

document.onreadystatechange = function(){
    if(document.readyState === 'interactive'){
        let el = document.createElement('div');
        el.className = 'App';
        document.body.appendChild(el);
        React.render(<App />, document.querySelector('.App'));
    }
};
