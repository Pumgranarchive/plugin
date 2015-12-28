/*
 * Select a DOM element
 *
 * @param {array} elements
 * @return {array}
 */
export function select(...elements) {
    return elements.map(element => document.querySelector(element))
};



/*
 * Stylize an element
 *
 * @param {object} styles
 * @return {array}
 */
export function css(styles) {
    this.forEach(element => {
        for(let key in styles) {
            element.style[key] = styles[key];
        }
    });
    return this;
}




/**
 * Add an event listener
 * to a DOM element
 *
 * @param {string} type
 * @param {func} listener
 * @return {array}
 */
export function on(type, listener, capture = false) {
    this.forEach(element => {
        element.addEventListener(type, listener, capture);
    });
    return this;
};
