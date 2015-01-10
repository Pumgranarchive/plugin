var PG_AnimationTime = '250ms';
var PG_scale = 0.8;
var PG_UrlAPI_ToUse = 'http://b01.pumgrana.com';
var PG_CurrentUrlVisited;
var PG_NbCharSummaryDisplayed = 123;
var PG_EaseString = 'easeInOutQuart';

var links_current;

$(window).focus(function() {
	chrome.runtime.sendMessage({method: 'DisplayNbLinks', data: links_current});
});


function togglePlugin()
{
	$("#Pumgrana_Plugin").toggle();
}

function DisplayPlugin()
{
	var Plugin_Active = $('#Pumgrana_Plugin').css('display');
	if (Plugin_Active === 'none')
	{
		$('#Web_Page').css('-webkit-transform', 'scale(0.8)');
	}
	else
	{
		$('#Web_Page').css('-webkit-transform', 'scale(1)');
		togglePlugin();
	}
}

function BuildPluginPage(data)
{
	var status = data.status;
	$('#PG_ListLinks').empty();
	if (status === 200)
	{
		var index ;
		var links = data.links;
		var htmlToAdd = '';
		for (index = 0 ; index < links.length ; index++)
		{
			var each = links[index];
			if (each.content_summary.length > PG_NbCharSummaryDisplayed)
			{
				each.content_summary = each.content_summary.substring(0, PG_NbCharSummaryDisplayed);
			}
			htmlToAdd += "<li><a class=\"PG_EachLink\" href=\"" + each.content_uri + "\" target=\"blank_\">" + '<p class="PG_title_text_la"><strong>' + each.content_title + '</strong><p class="PG_text_la">' + each.content_summary + '</p>' + "</a></li>";
		}
		$("#PG_ListLinks").html(htmlToAdd);
		links_current = links;
		chrome.runtime.sendMessage({method: 'DisplayNbLinks', data: links});
	}
}

function getPluginPage()
{
	$('#PG_SearchArticles').keyup(function (event) {
		var value = $('#PG_SearchArticles').val();
		var url_research = PG_UrlAPI_ToUse + '/api/link/list_from_research/' + encodeURIComponent(PG_CurrentUrlVisited) + '/' + value;
		console.log(url_research);
		$.get(url_research, function (data) {
			BuildPluginPage(data);
		});
	});
	getLinkedUrl(document.URL);
	$('#PG_RefreshButton').click(RefreshContent);
}

function getLinkedUrl(url)
{
	$('#PG_RefreshButton').prop('disabled', true);
	$('#PG_DisplayError').css('display', 'none');
	$('#ImageLoading').css('display', 'inline-block');
	
	var url = PG_UrlAPI_ToUse + '/api/link/list_from_content/' + encodeURIComponent(PG_CurrentUrlVisited);
	$.get(url, function (Json_links)
		{
			$('#ImageLoading').css('display', 'none');
			BuildPluginPage(Json_links);
		})
		.fail(function()
		{
			$('#PG_DisplayError').css('display', 'inline-block');
		})
		.always(function()
		{
			$('#PG_RefreshButton').prop('disabled', false);
			$('#ImageLoading').css('display', 'none');
		});
}

function RefreshContent()
{
	$('#PG_ListLinks').empty();
	getLinkedUrl(document.URL);
}

function setPluginCss()
{
	var Pumgrana_Plugin = $('#Pumgrana_Plugin');
	Pumgrana_Plugin.css('width', '19.9%');
	Pumgrana_Plugin.css('position', 'fixed');
	Pumgrana_Plugin.css('right', '0px');
	Pumgrana_Plugin.css('top', '0px');
	Pumgrana_Plugin.css('height', '100%');
	Pumgrana_Plugin.css('display', 'none');
	Pumgrana_Plugin.css('overflow', 'auto');
	
	$('#ImageLoading').css('display', 'inline-block');

	//$('#PG_RefreshButton').css('background-image', 'url("' + chrome.extension.getURL('RefreshButtonIcon.png') + '")');

	$('#PG_ToWebGUI').click(function() {
		$(location).attr('href','http://b01.pumgrana.com/view/' + encodeURIComponent(window.location.href));
	});
}

function setWebPageCss()
{
	var Web_Page = $('#Web_Page');
	Web_Page.css('transform-origin', '0 0');
	Web_Page.css('transition-timing-function', 'ease-in-out');
	Web_Page.css('transition-duration', PG_AnimationTime);
	
	Web_Page.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(event){
		if(event.target === event.currentTarget) /* The callback will be fired for every child element that transits as well. */
		{
			if ($('#Pumgrana_Plugin').css('display') === 'none' && Web_Page.css('-webkit-transform') === 'matrix(0.8, 0, 0, 0.8, 0, 0)') /* Same as scale(0.8) */
			{
				togglePlugin();
			}
		} 
	});
}

$(document).ready(function () {
PG_CurrentUrlVisited = window.location.href;
if ($('#Web_Page').length === 0)
{
	var PG_URLRefreshPage = chrome.extension.getURL('RefreshButtonIcon.png');
	console.log(PG_URLRefreshPage);
	var body = $('body');
	body.wrapInner('<div id=\'Web_Page\'></div>');
	body.append('<div id=\'Pumgrana_Plugin\'>\
								<div class="PG_InputGroup">\
									<input id="PG_SearchArticles"type="text" class="PG_Text_Input">\
									<button id="PG_RefreshButton" type="button" aria-label="Right Align" class="PG_Button" style="background-image: url(' + PG_URLRefreshPage + ');">\
										</button>\
								</div>\
									<button id="PG_ToWebGUI" type="button" aria-label="Right Align" class="PG_Button" ><img src="https://cdn2.iconfinder.com/data/icons/3_Minicons-Free-_Pack/46/road.png" /></button>\
								<img id="ImageLoading" alt="Loading Data" src="' + chrome.extension.getURL('Loading_Plugin.gif') + '"/>\
								<h3 id="PG_DisplayError">Failed to get linked articles</h3>\
								<ul id="PG_ListLinks">\
								</ul>\
								</div>');
	setWebPageCss();
	setPluginCss();
	getPluginPage();
}
});