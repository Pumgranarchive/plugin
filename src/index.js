import React from 'react';
import ReactDOM from 'react-dom';
import Root from './scripts/containers/Root';
import 'stylesheets/main';

document.onreadystatechange = function(){
    if(document.readyState === 'interactive'){
        let el = document.createElement('div');
        el.className = 'Pumgrana__ac863f3';
        document.body.appendChild(el);
        ReactDOM.render(<Root />, document.querySelector('.Pumgrana__ac863f3'));
    }
};
