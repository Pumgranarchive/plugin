import React, {Component} from 'react';
import ctx from 'classnames';
import './index.scss';
import View from 'View/';
import ViewBookmarks from 'ViewBookmarks/';
import Footer from 'Footer/';
import Overlay from 'Overlay/';
import Toogle from 'Toogle/';

var observer;

export default class Container extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { pages: [], related_content: [] }
    static propTypes = {
        pages: React.PropTypes.array.isRequired,
        related_content: React.PropTypes.array.isRequired
    }



    /**
     * States
     *
     */
    state = {
        current_page: 0,
        bookmarks_content: false,
        show: true
    }



    /**
     * Component did mount
     *
     */
    componentDidMount(){
        var el = this.refs.container.getDOMNode();

        observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(el.getAttribute('data-state'));
            });
        });
        observer.observe(el, {
            attributes: true,
            attributeFilter: ['data-state']
        });
    }



    /**
     * Component will unmount
     *
     */
    componentWillUnmount(){
        observer.disconnect();
    }



    /**
     * Go to bookmarks content
     *
     * @return setState
     */
    goToBookmarks(){
        return this.setState({
            bookmarks_content: !this.state.bookmarks_content
        });
    }



    /**
     * Go to an other view
     *
     * @param id (number)
     * @returb this.setState()
     */
    goTo(id){
        return this.setState({
            current_page: id
        });
    }



    /**
     * Toogle
     *
     * @return this.setState()
     */
    toogle(){
        return this.setState({
            show: !this.state.show
        });
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let { pages, actions, related_content } = this.props;
        let { current_page, bookmarks_content, show } = this.state;

        return (
            <div>
                <div className={ ctx("Pumgrana",{
                    "is-disabled": !show
                })} ref="container">
                    <Toogle
                        toogle={ ::this.toogle }
                        show={ show } />
                    <div className="Pumgrana_container">
                        <div className="Pumgrana_views">
                            { pages.map((page, i) => {
                                let position = 'current';
                                if((current_page - i) > 0){
                                    position = 'before';
                                }
                                else if((current_page - i) < 0){
                                    position = 'after';
                                }

                                return (
                                    <View page={ page }
                                          related_content={
                                               related_content.filter(
                                                   item => item.page_id === page.id
                                               )
                                          }
                                          lastPageId={ (pages.length - 1) }
                                          position={ position }
                                          goTo={ ::this.goTo }
                                          actions={ actions }
                                          key={ i } />
                                );
                            })}
                            <ViewBookmarks
                                related_content={ related_content }
                                show={ bookmarks_content }
                                actions={ actions } />
                        </div>
                    </div>
                    <Footer
                        related_content={ related_content }
                        goToBookmarks={ ::this.goToBookmarks } />
                </div>
                <Overlay
                    toogle={ ::this.toogle }
                    show={ show } />
            </div>
        );
    }
}
