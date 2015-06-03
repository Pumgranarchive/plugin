// Links_from_content param: uri, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

//Links_from_research param: content_uri, research, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

module Pumgrana {
    export module DataModel {
        export interface Response {
            status: number;
            error?: string;
        }
        export interface Link {
            link_uri: string;
            content_uri: string;
            content_title: string;
            content_summary: string;
        }

        export interface LinkedContent extends Response {
            links: Link[]
        }
    }

    export module API
    {
        function DoAjaxCall(prefix: string, param: string): DataModel.LinkedContent
        {
            var NetworkInterface: XMLHttpRequest = new XMLHttpRequest();

            NetworkInterface.open('GET', 'http://52.26.76.243/' + prefix + encodeURIComponent(param), false);
            NetworkInterface.send();

            if (NetworkInterface.status === 200)
            {
                return JSON.parse(NetworkInterface.responseText);
            }
        }

        export function GetLinksFromContent(uri: string): DataModel.Link[] {
            return DoAjaxCall('link/from_content/', uri).links;
        }

        export function GetLinksFromResearch(uri: string, input: string) : DataModel.Link[] {
            return DoAjaxCall('link/from_research/' + encodeURIComponent(uri), input).links;
        }
    }
}

var Linked_content: Pumgrana.DataModel.Link[] = Pumgrana.API.GetLinksFromContent('http://fr.wikipedia.org/wiki/Anima:_Beyond_Fantasy');
for (var l in Linked_content) {
    console.log(l.link_uri);
}