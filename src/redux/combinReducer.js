

export default function combinReducer(reducers) {

    let reducerkeys = Object.keys(reducers);
    return function (state = {}, action) {
        const nextState = {};//新状态对象 总状态合并
        for (let key of reducerkeys) {
            let reducer = reducers[key];
            let previousStateForKey = state[key];//a这个key的上一个状态
            let newxtStateForKey = reducer(previousStateForKey, action);
            nextState[key] = newxtStateForKey

        }

        return nextState;

    }

}


