import React, {Component} from 'react';
import View from 'View/';
import './index.css';

export default class Container extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { pages: [], related_content: [], actions: {} }
    static propTypes = {
        pages: React.PropTypes.array.isRequired,
        related_content: React.PropTypes.array.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * States
     *
     */
    state = {
        current_page: 0
    }


    /**
     * Render
     *
     */
    render(){
        let { pages, actions, related_content } = this.props;
        let { current_page } = this.state;

        return (
            <div className="Pumgrana">
                { pages.map((page, i) => {
                    return (
                        <View page={ page }
                              related_content={
                                   related_content.filter(
                                       item => item.page_id === page.id
                                   )
                              }
                              actions={ actions } />
                    );
                })}
            </div>
        );
    }
}
