import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import './index.scss';

export default class Header extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        page: {},
        lastPageId: 0,
        goTo: function(){}
    }
    static propTypes = {
        page: PropTypes.object.isRequired,
        lastPageId: PropTypes.number.isRequired,
        goTo: PropTypes.func.isRequired
    }



    /**
     * On click to back
     *
     * @return goTo function (props)
     */
    back(){
        return this.props.goTo(this.props.page.id - 1);
    }



    /**
     * On click to next
     *
     * @return goTo function (props)
     */
    next(){
        return this.props.goTo(this.props.page.id + 1);
    }



    /**
     * Render
     *
     */
    render(){
        let { page, lastPageId } = this.props;

        return (
            <div className="Header">
                <a role="button" onClick={ ::this.back } ref="back" aria-label="Go back" href="#/" className={ ctx('Header_back', {
                    'is-active': page.id !== 0
                }) }></a>
                <span className="Header_url">{ page.website }</span>
                <span className="Header_title">{ page.title }</span>
                <a role='button' onClick={ ::this.next } ref='next' aria-label='Go next' href='#/' className={ ctx('Header_next', {
                    'is-active': page.id !== lastPageId
                }) }></a>
            </div>
        );
    }
}
