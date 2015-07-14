import React, { Component } from 'react';
import Header from '../Header/';
import Resultats from '../Resultats/';
import './index.css';

export default class App extends Component {

    /**
     * Constructor
     *
     */
    constructor(props){
        super(props);
    }



    /**
     * Initialize state
     *
     */
    state = {
        scroll: false,
        items: [],
        page: {},
    }



    /**
     * Component did mount
     *
     */
    componentDidMount(){
        React.findDOMNode(this.refs.Container).addEventListener('scroll', ::this._onScroll);
        this.setState({
            items: [{
                link: 'http://source.com/example1',
                url: 'source.com',
                title: 'Content 1 facilis num dipit, quat nim niate facilis',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...',
                tags: ['Tag 1', 'Tag 2', 'Tag 3'],
                bookmarked: false,
                visited: false
            },{
                link: 'http://source.com/example2',
                url: 'source.com',
                title: 'Content 2 facilis num dipit, quat nim niate facilis',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...',
                tags: ['Tag 1', 'Tag 2'],
                bookmarked: false,
                visited: false
            }],
            page: {
                title: 'Titre de la page',
                url: 'source.com',
                bookmark: false,
            }
        })
    }



    /**
     * Component will unmount
     *
     */
    componentWillUnmount(){
        React.findDOMNode(this.refs.Container).removeEventListener('scroll', ::this._onScroll);
    }



    /**
     * On scroll (event)
     *
     * @return setState()
     */
    _onScroll(){
        this.setState({
            scroll: true
        });
    }



    /**
     * Render
     *
     * @return <html>
     */
    render() {
        let { scroll, items, page} = this.state;

        return (
            <div ref="Container" className="Pumgrana">
                <Header page={page} />
                <Resultats items={items} scroll={scroll} />
            </div>
        );
    }
}
