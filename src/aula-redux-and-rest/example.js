function patchStoreToAddLogging(store) {
	const next = store.dispatch

	store.dispatch = function dispatchAndLog(action) {
		console.log('dispatching', action)
		let result = next(action)
		console.log('next state', store.getState())
		return result
	}
}

function patchStoreToAddCrashReporting(store) {
	const next = store.dispatch
	store.dispatch = function dispatchAndReportErrors(action) {
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
}

patchStoreToAddLogging(store)
patchStoreToAddCrashReporting(store)