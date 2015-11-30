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
			fetch(`${protocol}${api}linkedcontent/${filter == '' ? 'from_content' : 'search'}/${encodeURIComponent(url)}${filter == '' ? filter : ''}`)
			  .then(response => response.json())
			  .then(data => resolve(data.links))
			  .catch(errors => reject(errors));
		});
	}

};
