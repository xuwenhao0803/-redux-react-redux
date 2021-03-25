import { createStore, combinReducer,applyMiddleWare } from '../redux';

const initialState = { number: 1 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, ...{ number: state.number + 1 } };
        case 'MINUS':
            return { ...state, ...{ number: state.number - 1 } };
        default:
            return state;
    }

}

function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, ...{ number: state.number + 1 } };
        case 'MINUS':
            return { ...state, ...{ number: state.number - 1 } };
        default:
            return state;
    }

}

const logger = function ({ dispacth, getState }) {
    return function (next) {
        return function (action) {
            console.log('prev state', getState());
            next(action);
            console.log('next state', getState());
        }
    }
}
let combin = combinReducer({ reducer, reducer1 });


let store = applyMiddleWare(logger)(createStore)(combin);





export {
    store
}