import { select, on } from 'utils/dom';
import types from 'constants/ActionTypes';

chrome.tabs.query({active: true, currentWindow: true}, tabs => {

    // Disable for this page
    select('.-page')::on('click', () => {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: types.DISABLE_FOR_THIS_PAGE
        });
    });

    // Disable for this website
    select('.-website')::on('click', () => {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: types.DISABLE_FOR_THIS_WEBSITE
        });
    });

});
