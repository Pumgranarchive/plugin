export default {

	/**
	 * Get related contet
	 *
	 * @return Promise
	 */
	getRelatedContent: (pageId, pageUrl) => {
		return new Promise((resolve) => {
			resolve([{
				title: 'Title 1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
				website: 'website.com',
				url: 'http://website.com/article1',
				tags: ['tag 1', 'tag2'],
				bookmarked: false,
				visited: false,
				pageId: pageId,
				searchFilter: ''
	        },
			{
				title: 'Title 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
				website: 'website.com',
				url: 'http://website.com/article2',
				tags: ['tag 1', 'tag2', 'tag3'],
				bookmarked: false,
				visited: false,
				pageId: pageId,
				searchFilter: ''
			}]);
		})
	},



	/**
	 * Load more related contet
	 *
	 * @return Promise
	 */
	loadMoreRelatedContent: (pageId, pageUrl, searchFilter) => {
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
                    pageId: pageId,
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
	 searchRelatedContent: (pageId, pageUrl, searchFilter) => {
    	return new Promise((resolve, reject) => {
        	resolve([{
                title: 'Title 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
                website: 'website.com',
                url: 'http://website.com/article4',
                tags: ['tag 1', 'tag2', 'tag3'],
                bookmarked: false,
                visited: false,
                pageId: pageId,
				searchFilter: searchFilter
            }]);
		})
	}
};
