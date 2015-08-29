import React, {Component, PropTypes} from 'react';
import ViewContainer from 'ViewContainer';
import ViewBookmarksContainer from 'ViewBookmarksContainer';
import './index.scss';

export default class Views extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        relatedContent: PropTypes.array.isRequired,
        pages: PropTypes.array.isRequired,
        currentPage: PropTypes.number.isRequired,
        goToPage: PropTypes.func.isRequired
    }



    /**
     * Render
     *
     */
    render(){
        let { pages, currentPage } = this.props;

        return (
            <div className="Views">
                <div className="Views_wrapper">
                    { pages.map((page, i) => {
                        let position = 'current';
                        if((currentPage - i) > 0){
                            position = 'before';
                        }
                        else if((currentPage - i) < 0){
                            position = 'after';
                        }

                        return (
                            <ViewContainer
                                position={ position }
                                pageId={ i }
                                pageUrl={ page.url }
                                key={ i } />
                        );
                    }) }
                    <ViewBookmarksContainer />
                </div>
            </div>

        );
    }
}
