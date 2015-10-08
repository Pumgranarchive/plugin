import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import View from 'View/';
import Item from 'Item/';

@connect(state => ({
    pages: state.pages
}))
export default class ViewContainer extends Component {

    /**
     * getRelatedContent()
     *
     * @return {jsx}
     */
    getRelatedContent() {
        let page = this.props.pages.get('items');
        if(page != undefined) {
        }

            console.log(page.toJS());
        return [0, 1];
    }



    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        this.getRelatedContent();

        return (
            <View> {
                [0, 1].map((item, index) => (
                    <Item key={ index } />
                ))
            } </View>
        );
    }

}

ViewContainer.PropTypes = {
    pageUrl: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
};
