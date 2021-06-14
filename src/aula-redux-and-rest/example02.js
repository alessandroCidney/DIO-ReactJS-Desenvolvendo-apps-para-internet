function logger(store) {
	const next = store.dispatch

	return function dispatchAndLog(action) {
		console.log('dispatching', action)
		let result = next(action)
		console.log('next state', store.getState())
		return result
	}
}

function applyMiddlewareByMonkeypatching(store, middlewares) {
	middlewares = middlewares.slice()
	middlewares.reverse()

	// Transform dispatch function with each middleware
	middlewares.forEach(middleware => (store.dispatch = middleware(store)))	
}

applyMiddlewareByMonkeypatching(store, [logger, crashReporter])