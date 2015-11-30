/**
  * A jQuery like library
  *
  * @return {object}
  */
export default {

    // Select an element
    select: (...elements) => {
        elements.map(element => document.querySelector(element))
    },

    // Style an element
    css: (styles) => {
        this.map(element => {
            for(let key in styles) {
                element.style[key] = styles[key];
            }
        });
        return this;
    }

}
