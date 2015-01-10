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
	else if (request.method === 'DisplayNbLinks')
	{
		var NbLinks = request.data.length;
		if (NbLinks >= 100)
			chrome.browserAction.setBadgeText({text: request.data.length.toString() + '+'});
		else
			chrome.browserAction.setBadgeText({text: request.data.length.toString()});

		sendResponse();
	}
	return true;
});
