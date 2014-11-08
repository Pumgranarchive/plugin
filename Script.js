chrome.tabs.query({active: true}, function (tabs){
	var currentTab = tabs[0];
	var url = currentTab.url;
	chrome.storage.sync.set({"CurrentUrl": url});
	chrome.tabs.executeScript(currentTab.id, {file: 'jquery-ui.min.js'}, function ()
	{
		chrome.tabs.insertCSS(currentTab.id, {file: 'jquery-ui.min.css'}, function ()
		{
			chrome.tabs.executeScript(currentTab.id, {file: 'Work.js'});
		});
	});
});