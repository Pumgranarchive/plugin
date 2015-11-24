import 'whatwg-fetch';
import { api } from 'config';
const protocol = window.location.protocol;

export default {

	/**
	 * Get related contet
	 *
	 * @params {object} params
	 * @return Promise
	 */
	getRelatedContent: ({url, offset, filter}) => {
		return new Promise((resolve, reject) => {
			fetch(`${protocol}${api}linkedcontent/${filter == '' ? 'from_content' : 'search'}/${encodeURIComponent(url)}${filter == '' ? filter : ''}`).then(response => {
				return response.json();
			}).then(response => {
				resolve(response);
			}).catch(error => reject(error));
		});
	}

};
