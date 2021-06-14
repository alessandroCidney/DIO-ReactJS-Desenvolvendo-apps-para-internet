// Centraliza todos os reducers da aplicação

import { combineReducers } from 'redux'
import { cientistasReducer } from './cientistas'
import { counterReducer } from './counter'

// Criando alias para cada reducer
const rootReducer = combineReducers({
	cientistas: cientistasReducer,
	counter: counterReducer
})

export default rootReducer