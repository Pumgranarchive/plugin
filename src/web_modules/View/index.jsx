import React, { Component, PropTypes } from 'react';
import Header from 'Header/';
import LoadMoreButton from './LoadMoreButton/';
import styles from './View.scss';

export default class View extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
    render(){
        let { type, isFetching, nrbOfRelatedContent, pageInformations } = this.props;

        return (
            <div className={ styles.container }>
                { type == 'page' &&
                    <Header { ...pageInformations } />
                }
                <div className={ styles.wrapper }>
                    <h2 className={ styles.title }>{
                        (type == 'bookmarks') ? 'Bookmarked contents' : 'Related content'
                    }</h2>
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
                { type == 'page' &&
                    <footer className={ styles.footer }>
                        <LoadMoreButton />
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
    children: PropTypes.object.isRequired,
    pageInformations: PropTypes.object.isRequired,
    position: PropTypes.oneOf(['current', 'prev', 'next']).isRequired
}
