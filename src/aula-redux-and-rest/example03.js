function logger(store) {
	// Tem que apontar para a função retornada pelo middleware anterior
	const next = store.dispatch

	return function dispatchAndLog(action) {
		console.log('dispatching', action)
		let result = next(action)
		console.log('next state', store.getState())
		return result
	}
}

// V2


function logger(store) {
	// Tem que apontar para a função retornada pelo middleware anterior
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			console.log('dispatching', action)
			let result = next(action)
			console.log('next state', store.getState())
			return result
		}
	}
}

// V3 - Real funcionamento dos Middlewares de Redux

const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}

const crashReporter = store => next => action => {
	try {
			return next(action)
		} catch (err) {
			console.log('Caught an exception!', err)
			Raven.captureException(err, {
				extra: {
					action,
					state: store.getState()
				}
			})
			throw err
	}
}