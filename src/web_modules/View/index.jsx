import React, {Component} from 'react';
import Header from 'Header/';
import Content from 'Content/';

export default class View extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { page: {}, related_content: {}, actions: {} }
    static propTypes = {
        page: React.PropTypes.object.isRequired,
        related_content: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * Render
     *
     */
    render(){
        let {page, related_content, actions} = this.props;
        
        return (
            <div>
                <Header
                    page={ page } />
                <Content
                    related_content= { related_content }
                    bookmarkItem={ actions.bookmarkItem } />
            </div>
        );
    }

}
