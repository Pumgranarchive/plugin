import React, {Component} from 'react';
import './index.scss';
import Item from './../Item/';
import SearchBar from '../SearchBar/';
import ctx from 'classnames';

export default class List extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        related_content: [],
        bookmarkItem: function(){},
        visitItem: function(){},
        loadMore: false
    }

    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        bookmarkItem: React.PropTypes.func.isRequired,
        visitItem: React.PropTypes.func.isRequired,
        loadMore: React.PropTypes.bool.isRequired
    }



    /**
     * Initialize state
     *
     */
    state = {
        loading: false
    }



    /**
     * Load more (event)
     *
     * @return setState() with object in param
     */
    loadMore(){
        this.setState({
            loading: true
        })

        setTimeout(() => {
            return this.setState({
                loading: false
            })
        }, 3000);
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {related_content, bookmarkItem, visitItem, loadMore} = this.props;
        let {loading} = this.state;

        // Render "Load more ..."
        let loader;
        if(loadMore){
            loader = (
                <button
                    onClick={::this.loadMore}
                    className={ctx("List_loadMore",{
                        "is-active": loading
                    })}>
                    { (loading ? 'Loading ...' : 'Load more') }
                </button>
            );
        }

        // Render related_content
        if(related_content.length == 0){
            related_content = (<div className="List-empty">No resultats found</div>)
        }
        else{
            related_content = related_content.map((item, i) => {
                return (
                    <div>
                        <Item bookmarkItem={ bookmarkItem } visitItem={ visitItem } key={i} item={item} />
                    </div>
                );
            })
        }

        return (
            <div className="List">
                { related_content }
                { loader }
            </div>
        );
    }
}
