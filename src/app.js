import React from 'react';
import Root from './scripts/containers/Root';
import 'stylesheets/main';
import isBlacklisted from 'utils/isBlacklisted'

if(__DEV__ || (__PROD__ && !isBlacklisted(location.href))) {
    let el = document.createElement('div');
    el.className = 'Pumgrana__ac863f3';
    document.body.appendChild(el);
    require('react-dom').render(<Root />, document.querySelector('.Pumgrana__ac863f3'));
}
