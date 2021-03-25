import React from 'react';
import reactReduxContext from './context';



export function connect(mapPropsToProps, mapDispatchToProps) {
    return Component => {
        class Comhoc extends React.Component {
            static contextType = reactReduxContext;
            constructor(props, context) {
                super(props);
                this.state = mapPropsToProps(context.getState())
            }
            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState(mapPropsToProps(this.context.getState()))
                })
            }
            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe()
            }

            render() {
                const dispatchCreator = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(this.context.dispatch) : {};

                return (
                    <Component {...this.state} dispatch={this.context.dispatch} {...dispatchCreator} />
                )


            }


        }
        return Comhoc;
    }

}
export default connect;
