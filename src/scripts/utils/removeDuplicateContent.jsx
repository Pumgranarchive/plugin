/**
 * removeDuplicateContent() function
 * Delete duplicate items in an object
 *
 * @params related_content (object)
 * @return response (object)
 */
export default function removeDuplicateContent(relatedContent){
    let response = [];
    let cache = [];

    for(let item of relatedContent){
        if(cache.indexOf(item.url) === -1){
            response.push(item);
            cache.push(item.url);
        }
    }

    return response;
}
