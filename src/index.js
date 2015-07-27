import React from 'react';
import App from './scripts/containers/App';
import 'stylesheets/main';


/**
 * First render
 *
 */
var show = false;
document.body.innerHTML += '<div class="Pumgrana_overlay"></div><div class="App"></div>';
React.render(<App show={show} />, document.querySelector('.App'));



/**
 * Toogle
 *
 */
function tooglePumgrana(){
    alert('toogle');
}