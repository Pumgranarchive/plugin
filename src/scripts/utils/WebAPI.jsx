/*import API from 'utils/api.ts';
var APIData = API.API.getLinksFromContent(window.location.href);

var initialState = [];
if (APIData && APIData.length > 0){
    for(let item of APIData){
    	initialState.push({
    		title: item.content_title,
    		description: item.content_summary,
    		website: 'mywebsite.com',
    		url: item.content_uri,
    		tags: ['tag1', 'tag2'],
    		bookmarked: false,
    		visited: false,
    		page_id: 0
    	});
    }
}*/

export default {

	/**
	 * Get related contet
	 *
	 * @return Promise
	 */
	getRelatedContent : (page_id, page_url) => {
	    return new Promise((resolve, reject) => {
	        resolve([{
	            title: 'Title 1',
	            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
	            website: 'website.com',
	            url: 'http://website.com/article1',
	            tags: ['tag 1', 'tag2'],
	            bookmarked: false,
	            visited: false,
	            page_id: page_id,
				searchFilter: ''
	        }, {
	            title: 'Title 2',
	            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
	            website: 'website.com',
	            url: 'http://website.com/article2',
	            tags: ['tag 1', 'tag2', 'tag3'],
	            bookmarked: false,
	            visited: false,
	            page_id: page_id,
				searchFilter: ''
	        }]);
	    })
	},



	/**
	 * Load more related contet
	 *
	 * @return Promise
	 */
	 loadMoreRelatedContent: (page_id, page_url, searchFilter) => {
    	return new Promise((resolve, reject) => {
			// Fake delay to test async
        	setTimeout(() => {resolve([
                {
                    title: 'Title 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
                    website: 'website.com',
                    url: 'http://website.com/article3',
                    tags: ['tag 1', 'tag2', 'tag3'],
                    bookmarked: false,
                    visited: false,
                    page_id: page_id,
					searchFilter: searchFilter
                }
            ]);}, 2000);
	    })
	},



	/**
	 * Search related contet
	 *
	 * @return Promise
	 */
	 searchRelatedContent: (page_id, page_url, searchFilter) => {
    	return new Promise((resolve, reject) => {
        	resolve([{
                title: 'Title 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
                website: 'website.com',
                url: 'http://website.com/article4',
                tags: ['tag 1', 'tag2', 'tag3'],
                bookmarked: false,
                visited: false,
                page_id: page_id,
				searchFilter: searchFilter
            }]);
	    })
	}
};
