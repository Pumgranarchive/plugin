function getPluginPage()
{
	var html = "<h2 id=\'LA_Title\'>Linked Articles (loading)</h2><ul id=\'ListLinks\'></ul>";
	$('#Pumgrana_Plugin').html(html);
}

function setPluginCss()
{
	$('#Pumgrana_Plugin').css('width', '29%');
	$('#Pumgrana_Plugin').css('position', 'fixed');
	$('#Pumgrana_Plugin').css('right', '0px');
	$('#Pumgrana_Plugin').css('top', '0px');
	$('#Pumgrana_Plugin').css('height', '100%');
	$('#Pumgrana_Plugin').css('display', 'none');
	$('#Pumgrana_Plugin').css('overflow', 'auto');
	
	chrome.runtime.sendMessage({method: "getLocalStorage", key: "Plugin_Active"}, function (response)
	{
		$('#Pumgrana_Plugin').css('display', response.Plugin_Active);
		if (response.Plugin_Active != null && response.Plugin_Active != 'none')
		{
			$('#Web_Page').css('-webkit-transform', 'scale(0.7,0.7) translate(-21.5%,-21.5%)');
		}
		getPluginPage();
	});
}

function setWebPageCss()
{
	$('#Web_Page').css('width', '100%');
	$('#Web_Page').css('position', 'absolute');
	$('#Web_Page').css('top', '0px');
	$('#Web_Page').css('left', '0px');
}

$(document).ready(function () {
if ($('#Web_Page').length == 0)
{
	var Loading_Image_Url = chrome.extension.getURL("/Loading_Plugin.gif");
	$('body').wrapInner('<div id=\'Web_Page\'></div>');
	$('body').append('<div id=\'Pumgrana_Plugin\'>\
						</div>');
	$('body').css('display', 'inline-block');
	setWebPageCss();
	setPluginCss();
}
});