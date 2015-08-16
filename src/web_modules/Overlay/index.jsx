import React, {Component, PropTypes} from 'react';
import './index.scss';
import {select, css} from 'utils/dom';
import ctx from 'classnames';

export default class Overlay extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        toogle: function(){},
        show: true
    }
    static propTypes = {
        toogle: React.PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
    }



    /**
     * On click
     *
     * @return toogle (this.props)
     */
    onClick(){
        if(this.props.show === true){
            return this.props.toogle();
        }
        return false;
    }



    /**
     * Render
     *
     */
    render(){
        let { show } = this.props;

        select('html, body')::css({
            overflow: (show ? 'hidden' : 'auto')
        });

        return (
            <div className={
                ctx('Overlay', {
                    'is-disabled': !show
                })}
                onClick={ ::this.onClick }>
            </div>
        );
    }
}
