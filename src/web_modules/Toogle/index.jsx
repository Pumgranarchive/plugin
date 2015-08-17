import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import './index.scss';

export default class Toogle extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        action: function(){},
        show: true
    }
    static propTypes = {
        action: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
    }



    /**
     * On click (event)
     *
     * @return action()
     */
    onClick(){
        return this.props.action();
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
