import React, {Component} from 'react';
import './index.scss';

export default class Header extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { page: {} }
    static propTypes = { page: React.PropTypes.object.isRequired }



    /**
     * Render
     *
     */
    render(){
        let {page} = this.props;

        return (
            <div className="Header">
                <a aria-label="Go back" href="#/" className="Header_back"></a>
                <span className="Header_url">{ page.website }</span>
                <span className="Header_title">{ page.title }</span>
                <svg className="Header_bookmark is-active" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                   <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                </svg>
            </div>
        );
    }
}
