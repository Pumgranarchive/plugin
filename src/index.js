import React from 'react';
import App from './scripts/containers/App';
import 'stylesheets/main';

document.onreadystatechange = function(){
    if(document.readyState === 'interactive'){
        let el = document.createElement('div');
        el.className = 'Pumgrana__ac863f3';
        document.body.appendChild(el);
        React.render(<App />, document.querySelector('.Pumgrana__ac863f3'));
    }
};
