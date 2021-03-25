

export default function createStore(reducer, initalState) {
    let state = initalState;
    let lists = [];
    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        lists.forEach(item => item());
        return action;
    }

    function subscribe(func) {
        lists.push(func);
        return function unsubscribe() {
            lists = lists.filter(item => item != func)
        }
    }

    dispatch({
        type: '@@INIT'
    })

    return {
        dispatch,
        subscribe,
        getState
    }



}