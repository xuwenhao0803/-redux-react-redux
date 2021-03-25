function compose(...fns) {

    return fns.reduce((a, b) => (...args) => a(b(...args)))

}

export default function applyMiddleWare(...middlewares) {
    return function (createStore) {
        return function (combinReducer) {
            let store = createStore(combinReducer)
            let dispatch = null;
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            }
            const chain = middlewares.map(middleware => middleware(middlewareAPI))
            store.dispatch = compose(...chain)(store.dispatch)

            return store;
        }
    }
}