var PG_AnimationTime = 250;
var PG_scale = 0.8;
var PG_UrlAPI_Externe = 'http://163.5.84.222';
var PG_UrlAPI_Interne = 'http://10.224.9.222';
var PG_UrlAPI_Arnaud = 'http://10.102.185.253:8081';
var PG_UrlAPI_ToUse = PG_UrlAPI_Arnaud;
var PG_CurrentUrlVisited;
var PG_NbCharSummaryDisplayed = 123;

function Store_Plugin_Active_Data()
{
	var Display = $('#Pumgrana_Plugin').css('display');
	chrome.storage.sync.set({"Plugin_Active": Display});
}

function togglePlugin()
{
	$("#Pumgrana_Plugin").toggle();
	Store_Plugin_Active_Data();
}

function DisplayPlugin()
{
	chrome.runtime.sendMessage({method: 'getLocalStorage', key: 'Plugin_Active'}, function (response)
	{
		if (response.Plugin_Active === 'none')
		{
			$("#Web_Page").transition({scale: PG_scale}, PG_AnimationTime, 'ease', function ()
			{
				togglePlugin();
			});
		}
		else
		{
			$("#Web_Page").transition({scale: 1}, PG_AnimationTime, 'ease');
			togglePlugin();
		}
	});
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
	}
}

function getPluginPage()
{		
	$('#PG_SearchArticles').keyup(function (event) {
		var value = $('#PG_SearchArticles').val();
		var url_research = PG_UrlAPI_ToUse + '/api/link/list_from_research/' + encodeURIComponent(PG_CurrentUrlVisited) + '/' + value;
		$.get(url_research, function (data) {
			BuildPluginPage(data);
		});
	});		
	getLinkedUrl(document.URL);
	$('#PG_RefreshButton').click(RefreshContent);
}

function AutoDisplay()
{
	chrome.runtime.sendMessage({method: 'getLocalStorage', key: 'Plugin_Active'}, function (response)
	{
		if (response.Plugin_Active !== 'none')
		{
			
			$("#Web_Page").transition({scale: PG_scale}, PG_AnimationTime, 'ease', function ()
			{
				togglePlugin();
			});
		}
	});
	getPluginPage();
}

function getLinkedUrl(url)
{
	$('#PG_RefreshButton').prop('disabled', true);
	var url = PG_UrlAPI_ToUse + '/api/link/list_from_content/' + encodeURIComponent(PG_CurrentUrlVisited);
	$.get(url, function (Json_links)
	{
		$('#ImageLoading').css('display', 'none');
		BuildPluginPage(Json_links);
	})
	.fail(function()
	{
		$("#PG_LA_Title").text("Failed to get datas");
	})
	.always(function()
	{
		$('#PG_RefreshButton').prop('disabled', false);
	});;
}

function RefreshContent()
{
	$('#PG_ListLinks').empty()
	getLinkedUrl(document.URL);
}

function setPluginCss()
{
	$('#Pumgrana_Plugin').css('width', '19.9%');
	$('#Pumgrana_Plugin').css('position', 'fixed');
	$('#Pumgrana_Plugin').css('right', '0px');
	$('#Pumgrana_Plugin').css('top', '0px');
	$('#Pumgrana_Plugin').css('height', '100%');
	$('#Pumgrana_Plugin').css('display', 'none');
	$('#Pumgrana_Plugin').css('overflow', 'auto');
	
	$('#ImageLoading').css('display', 'inline-block');
}

function setWebPageCss()
{
	$('#Web_Page').css('transform-origin', '0 0');
}

$(document).ready(function () {
PG_CurrentUrlVisited = window.location.href;
if ($('#Web_Page').length == 0)
{
	$('body').wrapInner('<div id=\'Web_Page\'></div>');
	$('body').append('<div id=\'Pumgrana_Plugin\'>\
								<div class="input-group">\
									<input type="text" class="form-control">\
										<button id="PG_RefreshButton" type="button" class="btn btn-primary" aria-label="Right Align">\
											<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>\
										</button>\
								</div><!-- /input-group -->\
								<img id="ImageLoading" alt="Loading Data" src="' + chrome.extension.getURL('Loading_Plugin.gif') + '"/>\
								<ul id="PG_ListLinks" class="list-unstyled">\
								</ul>\
								</div>');
	setWebPageCss();
	setPluginCss();
	//AutoDisplay();
}
});