import { createStore } from "redux";

function reducer(state, action){
    if (action.type === 'number') {
           state = state + action.payload
    } else if (action.type === 'clear'){
        state = ''
    } else if (action.type === 'result'){
        state = eval(state)
    }
    return state
}

const store = createStore(reducer, '')

export default store;