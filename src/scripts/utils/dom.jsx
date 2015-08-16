/**
  * DOM (a jQuery like library)
  * Inspired by the code of bloodyowl (https://gist.github.com/bloodyowl/144804438bf5bce8120a#file-core-js)
  *
  */
export function select (value){
    let selector = [];

    if(value == null) {
        return [];
    }
    else{
        for(let element of value.split(',')){
            selector.push(document.querySelector(element));
        }
    }
    return selector;
}

export function css (object){
    this.forEach((element) => {
        for(let key in object) {
            element.style[key] = object[key];
        }
    });
    return this;
}
