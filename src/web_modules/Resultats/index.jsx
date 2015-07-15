import React, {Component} from 'react';
import Item from './../Item/';
import SearchBar from '../SearchBar/';
import './index.css';
import ctx from 'classnames';

export default class Resultats extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        items: false,
        scroll: false
    }

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        scroll: React.PropTypes.bool.isRequired
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
     * @return setState()
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
     */
    render(){
        let {items, scroll} = this.props;
        let {search, loading} = this.state;

        return (
            <div className="Resultats">
                <h1 className="Resultats_title">
                   {((search == '') ? 'Related content' : `Resulats for "${search}"`)}
                </h1>
                <SearchBar scroll={scroll} handleSearch={::this.handleSearch} />
                {items.map((item, i) => { return (
                    <div>
                        <Item key={i} item={item} />
                    </div>
                );})}
                <button onClick={::this.loadMore} className={ctx("Resultats_loadMore",{
                    "is-active": loading
                })}>{ (loading ? 'Loading ...' : 'Load more') }</button>
            </div>
        );
    }
}
