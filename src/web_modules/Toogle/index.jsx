import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import './index.scss';

export default class Toogle extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        toogle: function(){return true},
        show: true
    }
    static propTypes = {
        toogle: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
    }



    /**
     * On click (event)
     *
     */
    _onClick(){
        return this.props.toogle();
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return (
            <button
                className= { ctx("Toogle",{
                    "is-closed": this.props.show
                }) }
                onClick={ ::this._onClick }
                title= {( this.props.show ? 'Close' : 'Open' )} >
            </button>
        );
    }
}
