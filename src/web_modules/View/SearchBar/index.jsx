import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.scss';

const SearchBar = (props) => {
    let input;
    const onChange = () => props.searchRelatedContent(input.value);

    return (
        <input
           type="text"
           ref={ node => input = node }
           placeholder="Search..."
           className={ styles.input }
           onChange={ () => onChange() }
           onKeyDown={ () => onChange() } />
    );
}

export default SearchBar;
