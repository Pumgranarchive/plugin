import React, {Component} from 'react';
import Header from 'Header/';
import Content from 'Content/';

export default class View extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { data: {}, actions: {} }
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * Render
     *
     */
    render(){
        let {data, actions} = this.props;

        return (
            <div>
                <Header
                    page={ data.page } />
                <Content
                    data={ data.related_content }
                    bookmarkItem={ actions.bookmarkItem } />
            </div>
        );
    }

}
