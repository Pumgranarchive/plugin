import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import './index.scss';

export default class Toogle extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        action: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired,
        hasResultats: PropTypes.bool.isRequired
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
        let { show, hasResultats } = this.props;

        return (
            <button
                className= { ctx('Toogle', {
                    'is-closed': !show,
                    'is-discreet': !hasResultats
                }) }
                onClick={ ::this.onClick }
                title= {( show ? 'Close' : 'Open' )} >
            </button>
        );
    }
}
