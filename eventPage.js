chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
	{
		chrome.storage.sync.get(request.key, function (items)
		{
			sendResponse(items);
		});
	}
	else if (request.method == "getUrlFromActiveTab")
	{
		chrome.storage.sync.get(request.key, function (items)
		{
			sendResponse(items);
		});
	}
	return true;
});
