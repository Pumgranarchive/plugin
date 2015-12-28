import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'Popup/';
import './popup.html';

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    ReactDOM.render(<Popup tabs={ tabs } />, document.querySelector('.Popup'));
});
