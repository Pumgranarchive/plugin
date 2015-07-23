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
            </div>
        );
    }
}
