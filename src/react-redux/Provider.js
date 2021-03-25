import React from 'react';
import reactReduxContext from './context';


export default class Provider extends React.Component {
    render() {
        return (
            <reactReduxContext.Provider value={this.props.store}>
                {this.props.children}
            </reactReduxContext.Provider>
        )


    }


}