/**
  * DOM (a jQuery like library)
  * Inspired by the code of bloodyowl (https://gist.github.com/bloodyowl/144804438bf5bce8120a#file-core-js)
  *
  */

// Select an element
export function select(value : []){
    let selector = [];

    for(let element of value.split(',')){
        selector = [
            ...document.querySelector(element.replace(/\s+/g, '')),
            element
        ];
    }

    return selector;
}

// Handle css
export function css(object){
    this.forEach((element) => {
        for(let key in object) {
            element.style[key] = object[key];
        }
    });

    return this;
}
