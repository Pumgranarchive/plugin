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
        clickAction: function(){},
        show: true
    }
    static propTypes = {
        clickAction: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
    }



    /**
     * On click
     *
     * @return toogle (this.props)
     */
    onClick(){
        if(this.props.show === true){
            return this.props.clickAction();
        }
        return false;
    }



    /**
     * Render
     *
     */
    render(){
        let { show } = this.props;
        let styles = {};

        if(__DEBUG__){
            styles = {
                zIndex: 0
            };
        }

        select('html, body')::css({
            overflow: (show ? 'hidden' : 'auto')
        });

        return (
            <div className={
                ctx('Overlay', {
                    'is-disabled': !show
                })}
                style={ styles }
                onClick={ ::this.onClick }>
            </div>
        );
    }
}
