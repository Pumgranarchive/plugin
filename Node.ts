// Links_from_content param: uri, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

//Links_from_research param: content_uri, research, response: linked_content
//{ "status":200, "links":[{ "link_uri": 9457, ”content_uri”:65432,"content_title": "Zimbabwe", "content_summary": "my summary" }, { "link__uri": 5, ”content_uri”:143957,"content_title": "Paris”,"content_summary":"my summary"}]}

module PG_API {
    module Response {
        export interface Link {
            link_uri: string;
            error?: string;
            content_uri: string;
            content_title: string;
            content_summary: string;
        }

        export interface LinkedContent {
            status: number;
            links: Link[]
        }
    }
}