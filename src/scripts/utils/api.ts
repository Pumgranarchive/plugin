// Links_from_content param: uri, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

//Links_from_research param: content_uri, research, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

export module API{
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

    export function doAjaxCall(prefix: string, param: string): DataModel.LinkedContent
    {
        var NetworkInterface: XMLHttpRequest = new XMLHttpRequest();

	    var Url: string  = 'http://api.pumgrana.com/' + prefix + encodeURIComponent(param);
        NetworkInterface.open('GET', Url, false);
        NetworkInterface.send();

        if (NetworkInterface.status === 200)
        {
            return JSON.parse(NetworkInterface.responseText);
        }
    }

    export function getLinksFromContent(uri: string): DataModel.Link[] {
        return doAjaxCall('linkedcontent/from_content/', uri).links;
    }


    export function getLinksFromResearch(uri: string, input: string) : DataModel.Link[] {
        return doAjaxCall('linkedcontent/search/' + encodeURIComponent(uri), input).links;
    }
}
