import React, {Component} from 'react';
import './index.scss';
import Item from './../Item/';
import ctx from 'classnames';

export default class List extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        related_content: [],
        bookmarkItem: function(){},
        visitItem: function(){}
    }

    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        bookmarkItem: React.PropTypes.func.isRequired,
        visitItem: React.PropTypes.func.isRequired
    }



    /**
     * Initialize state
     *
     */
    state = {
        search: '',
    }



    /**
     * Handle search (event)
     *
     * @return setState()
     */
    handleSearch(search){
        return this.setState({
            search: search
        });
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
        let {related_content, bookmarkItem, visitItem} = this.props;
        let {search, loading} = this.state;

        return (
            <div className="Resultats">
                <h1 className="Resultats_title">
                   {((search == '') ? 'Related content' : `Resulats for "${search}"`)}
                </h1>
                {related_content.map((item, i) => { return (
                    <div>
                        <Item bookmarkItem={ bookmarkItem } visitItem={ visitItem } key={i} item={item} />
                    </div>
                );})}
                <button
                    onClick={::this.loadMore}
                    className={ctx("Resultats_loadMore",{
                        "is-active": loading
                    })}>
                    { (loading ? 'Loading ...' : 'Load more') }
                </button>
            </div>
        );
    }
}
