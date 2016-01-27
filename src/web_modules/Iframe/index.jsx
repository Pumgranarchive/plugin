import React, { Component, PropTypes } from 'react';
import styles from './Iframe';
import { select, css } from 'utils/dom';

export default class Item extends Component{

    /**
     * Component will mount
     *
     */
    componentWillMount() {

        // Remove all elements of the page
       let selectors = [
           ...document.querySelectorAll('body > *:not(.Pumgrana__ac863f3)')
       ];
       selectors.map((element) => {
           element.parentNode.removeChild(element);
       });

       // Set size of body / html
       select('html', 'body')::css({
           height: '100vh',
           overflow: 'hidden'
       });

    }



    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        let { src, enable } = this.props;

        return (
            <iframe
                ref="iframe"
                frameBorder='0'
                src={ src }
                className={ styles.container }>
            </iframe>
        );
    }

}

Item.PropTypes = {
    src: PropTypes.string.isRequired
}
