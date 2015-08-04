/// <reference path="es6-promise.d.ts"/>

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

        export interface ViewLinkData {
            title: string;
            description: string;
            website: string;
            url: string;
            tags: string[];
            bookmarked: boolean;
            visited: boolean;
            page_id: number;
            searchFilter: string;
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

    export function DataToPromise(APIresult: DataModel.Link[], searchFilter?: string) : Promise<DataModel.ViewLinkData[]>
    {
        var result: DataModel.ViewLinkData[] = [];
        if (APIresult !== null)
        {
            for (var i: number = 0 ; i < APIresult.length ; i++)
            {
                var Data:DataModel.Link = APIresult[i];
                result.push({
                    title: Data.content_title,
                    description: Data.content_summary,
                    website: Data.content_uri.replace('http://', ''),
                    url: Data.content_uri,
                    tags: [],
                    bookmarked: false,
                    visited: false,
                    page_id: 0,
                    searchFilter: searchFilter
                });
            }
        }
        return new Promise<DataModel.ViewLinkData[]>((resolve, reject) =>
        {
            resolve(result);
        });
    }

    export function getLinksFromContent(uri: string): Promise<DataModel.ViewLinkData[]> {
        var APIresult: DataModel.Link[]  =  doAjaxCall('linkedcontent/from_content/', uri).links;
        return DataToPromise(APIresult, '');
    }


    export function getLinksFromResearch(uri: string, input: string) : Promise<DataModel.ViewLinkData[]> {
        var APIresult: DataModel.Link[] = doAjaxCall('linkedcontent/search/' + encodeURIComponent(uri) + '/', input).links;
        console.log(APIresult);
        return DataToPromise(APIresult, input);
    }
}
