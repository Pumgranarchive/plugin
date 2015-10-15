export default {

	/**
	 * Get related contet
	 *
	 * @params {object} params
	 * @return Promise
	 */
	getRelatedContent: (params) => {
		return new Promise((resolve) => {
			resolve({
				'http://website.com/article1': {
					title: 'Title 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
					domainName: 'website.com',
					tags: ['tag 1', 'tag2'],
					bookmarked: false,
					visited: false
				},
				'http://website.com/article2': {
					title: 'Title 2',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
					domainName: 'website.com',
					tags: ['tag 1', 'tag2', 'tag3'],
					bookmarked: true,
					visited: false
				}
			});
		});
	}
};
