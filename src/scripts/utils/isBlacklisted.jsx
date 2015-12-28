import { getDomainName } from 'utils/url';
import types from 'constants/ActionTypes';

const blacklist = [
    'google.com',
    'www.google.fr',
    'mail.google.com',
    'netflix.com',
    'localhost'
];

/*
 * isBlacklisted()
 *
 * @param {string} url
 * @return {bool}
 */
export default (url) => {
    const localBlacklist = localStorage.getItem('pumgrana');
    if(localBlacklist &&
      (localBlacklist === types.DISABLE_FOR_THIS_WEBSITE ||
      (localBlacklist.split(';')[0] === types.DISABLE_FOR_THIS_PAGE) && localBlacklist.split(';')[1] == location.href)) {
        return true;
    }
    return blacklist.includes(getDomainName(url))
};
