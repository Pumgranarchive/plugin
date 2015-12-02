import { getDomainName } from 'utils/url';

export const blacklist = [
    'google.com',
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
const isBlacklisted = (url) => {
    if(blacklist.indexOf(getDomainName(url)) >= 0) {
        return true;
    }
    return false;
};
export default isBlacklisted;
