// Você pode acompanhar os valores atual e anterior através da extensão Redux DevTools 

import { INCREMENT, DECREMENT } from './actions';

const initialState = {
    count: 0
}

// O Reducer verifica qual action foi disparada
export function reducer(state = initialState, action) {
    switch(action, start) {
        // Os valores são retornados, e não incrementados/decrementados diretamente
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}