function getLinkedUrl()
{
	chrome.runtime.sendMessage({method: "getUrlFromActiveTab", key: "CurrentUrl"}, function (response)
	{
			var id = response.CurrentUrl;
			var url = "http://10.224.9.222/api/link/list_from_content/" + encodeURIComponent(id);
			$.get(url, function (Json_links)
			{
				var ArrayLinks = Json_links.links;
				var index;
				var htmltoadd = "";
				$("#LA_Title").text("Linked Articles (" + ArrayLinks.length.toString() + ")");
				for (index = 0 ; index < ArrayLinks.length ; index++)
				{
					var each = ArrayLinks[index];
					htmltoadd += "<li><a href=\"" + each.content_uri + "\" target=\"blank_\">" + each.content_title + "</a></li>"
				}
				$("#ListLinks").wrapInner(htmltoadd);
			})
			.fail(function()
			{
				$("#LA_Title").text("Failed to get datas");
			});
	});
}

function Store_Plugin_Active_Data()
{
	var Display = $('#Pumgrana_Plugin').css('display');
	chrome.storage.sync.set({"Plugin_Active": Display});
}

function togglePlugin()
{
	//$("#Pumgrana_Plugin").toggle('blind', {direction: "right", easing: "easeOutElastic"}, 1000);
	$('#Pumgrana_Plugin').toggle();
	Store_Plugin_Active_Data();
}

$(document).ready(function() {
if ($('#Pumgrana_Plugin').css('display') == 'none')
{
	$('#Web_Page').css('-webkit-transform', 'scale(0.7,0.7) translate(-21.5%,-21.5%)');
	//getPluginPage();
	togglePlugin();
	getLinkedUrl();
}
else
{
	$('#Web_Page').css('-webkit-transform', 'scale(1,1)');
	togglePlugin();
}
});