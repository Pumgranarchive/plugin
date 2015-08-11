chrome.tabs.query({active: true}, function(tabs){
   window.close();
   chrome.tabs.executeScript(tabs[0].id, {});
});
