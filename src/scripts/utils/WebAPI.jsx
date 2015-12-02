import 'whatwg-fetch';
import { api } from 'config';
const protocol = window.location.protocol;

export default {

	/**
	 * Get related contet
	 *
	 * @param {object}
	 * @return {promise}
	 */
	getRelatedContent: ({url, offset, filter}) => {
		return new Promise((resolve, reject) => {
			if(__DEV__) {
				return resolve([{
					content_title: filter == '' ? 'Hello' : filter,
					content_summary: 'Lorem ipsum dolor',
					content_uri: 'http://hello.fr/' + filter
				}])
			}
			else {
				fetch(`${protocol}${api}linkedcontent/${filter == '' ? 'from_content' : 'search'}/${encodeURIComponent(url)}${filter != '' ? `/${filter}` : ``}`)
				  .then(response => response.json())
				  .then(data => resolve((data.links !== null ? data.links : [])))
				  .catch(errors => reject(errors));
			}
		});
	}

};
