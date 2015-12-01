/*
 * Get domain name
 *
 * @params {string} url
 * @return {string} domainName
 */
export function getDomainName(url) {
    var domainName;

    if (url.indexOf('://') > -1) {
        domainName = url.split('/')[2];
    }
    else {
        domainName = url.split('/')[0];
    }

    domainName = domainName.split(':')[0];

    return domainName;
}
