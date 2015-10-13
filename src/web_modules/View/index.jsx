import React, { Component, PropTypes } from 'react';
import Header from 'Header/';
import LoadMoreButton from './LoadMoreButton/';
import SearchBar from 'SearchBar/';
import styles from './View.scss';
import ctx from 'classnames';

export default class View extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
    render(){
        let { type, isFetching, nrbOfRelatedContent, pageInformations, current, insideWrapper } = this.props;

        return (
            <div className={ ctx({
                [styles.disabledContainer]: !insideWrapper && type != 'bookmarks',
                [styles.enableContainer]: insideWrapper || type == 'bookmarks'
            }) }>
                { type == 'page' &&
                    <Header
                        goTo={  ::this.props.goTo }
                        hasAncestors={ this.props.hasAncestors }
                        hasParents={ this.props.hasParents }
                        bookmarkPage={ ::this.props.bookmarkPage }
                        { ...pageInformations } />
                }
                <div className={ styles.wrapper }>
                    <h2 className={ styles.title }>{
                        (type == 'bookmarks') ? 'Bookmarked contents' : 'Related content'
                    }</h2>
                    { type == 'page' &&
                        <SearchBar />
                    }
                    { isFetching && nrbOfRelatedContent == 0 &&
                        <div className={ styles.noResultat }>
                            Loading ...
                        </div>
                    }
                    { !isFetching && nrbOfRelatedContent == 0 &&
                        <div className={ styles.noResultat }>
                            { (type == 'bookmarks') ?
                                `Hey, you have nothing bookmarked yet : /
                                To start bookmarking during your navigation session
                                just click on the icon that appears on hover` :
                                'No resultats found'
                            }

                        </div>
                    }
                    { nrbOfRelatedContent > 0 &&
                        this.props.children
                    }
                </div>
                { type == 'page' && nrbOfRelatedContent != 0 &&
                    <footer className={ styles.footer }>
                        <LoadMoreButton
                            status={ (isFetching ? 'loading' : 'loaded') }
                            action={ ::this.props.loadMoreRelatedContent } />
                    </footer>
                }
            </div>
        );
    }

}

View.PropTypes = {
    type: PropTypes.oneOf(['page', 'bookmarks']).isRequired,
    nrbOfRelatedContent: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    goTo: PropTypes.func.isRequired,
    hasAncestors: PropTypes.bool.isRequired,
    hasParents: PropTypes.bool.isRequired,
    current: PropTypes.bool.isRequired,
    insideWrapper: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
    pageInformations: PropTypes.object.isRequired
}
