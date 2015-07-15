import React, {Component} from 'react';
import View from 'View/';
import './index.css';

export default class Container extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { data: {}, actions: {} }
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * Render
     *
     */
    render(){
        let {data, actions} = this.props;

        return (
            <div className="Pumgrana">
                { data.data.map((data, i) => { return (
                    <View data={ data } actions={ actions } />
                );})}
            </div>
        );
    }
}
