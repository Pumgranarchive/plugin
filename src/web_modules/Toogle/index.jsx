import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import './index.scss';

export default class Toogle extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        toogle: function(){},
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
    onClick(){
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
                className= { ctx('Toogle', {
                    'is-closed': this.props.show
                }) }
                onClick={ ::this.onClick }
                title= {( this.props.show ? 'Close' : 'Open' )} >
            </button>
        );
    }
}
