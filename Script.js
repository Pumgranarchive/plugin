chrome.tabs.query({active: true}, function (tabs){
	var currentTab = tabs[0];
	window.close();
	chrome.tabs.executeScript(currentTab.id, {file: 'Work.js'});
});