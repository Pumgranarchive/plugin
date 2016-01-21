import React from 'react';
import ReactDOM from 'react-dom';
import isBlacklisted from 'utils/isBlacklisted';
import Popup from 'Popup/';
import './popup.html';

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    if(isBlacklisted(tabs[0].url)) window.close();
    else ReactDOM.render(<Popup tabs={ tabs } />, document.querySelector('.Popup'));
});
