/*
 * Select a DOM element
 *
 * @params {array} elements
 * @return {array}
 */
export function select (...elements) {
    return elements.map(element => document.querySelector(element))
};



/*
 * Stylize an element
 *
 * @params {object} styles
 * @return {array}
 */
export function css (styles) {
    this.map(element => {
        for(let key in styles) {
            element.style[key] = styles[key];
        }
    });
    return this;
}
