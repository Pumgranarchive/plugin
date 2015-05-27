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
    export class API {
        private NetworkInterface: XMLHttpRequest;
        constructor ()
        {
            this.NetworkInterface = new XMLHttpRequest();
        }
        private DoAjaxCall(prefix: string, param: string): DataModel.LinkedContent {

            this.NetworkInterface.open('GET', 'http://api.pumgrana.com/' + prefix, false);
            this.NetworkInterface.send(encodeURIComponent(param));

            if (this.NetworkInterface.status === 200) {
                return JSON.parse(this.NetworkInterface.responseText);
            }
        }
        public GetLinksFromContent(uri: string): DataModel.Link[] {
            return this.DoAjaxCall('link/from_content/', uri).links;
        }

        public GetLinksFromResearch(uri: string, input: string) : DataModel.Link[] {
            return this.DoAjaxCall('link/from_research/' + encodeURIComponent(uri), input).links;
        }
    }
}