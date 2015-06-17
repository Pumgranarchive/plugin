/**
 * Toogle.js
 *
 */
 
chrome.tabs.query({active: true}, (tabs) =>{ 
   window.close();
   chrome.tabs.executeScript(tabs[0].id, {
        code: `PumgranaPlugin.toogle('chromebar')`
    });
});