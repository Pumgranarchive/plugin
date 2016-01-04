import fetch from 'utils/fetch';
import { api } from 'config';
const protocol = window.location.protocol;

export default {

	/**
	 * Get related contet
	 *
	 * @param {object}
	 * @return {promise}
	 */
	getDRelatedContent: ({url, offset, filter}) => {
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
				  .then(response => resolve((response.links !== null ? response.links : [])))
				  .catch(errors => reject(errors));
			}
		});
	}

};


function* getAllProducts() {
  while( yield take(types.GET_ALL_PRODUCTS) ) {
    const products = yield call(api.getProducts)
    yield put(actions.receiveProducts(products))
  }
}
