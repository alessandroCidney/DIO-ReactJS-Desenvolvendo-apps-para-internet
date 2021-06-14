import { createStore, combineReducers, applyMiddleware } from 'redux'

const todoApp = combineReducers(reducers)
const store = createStore(
	todoApp,
	// applyMiddleware() diz a createStore() como fazer o handling do middleware
	applyMiddleware(logger, crashReporter)
)