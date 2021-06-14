import { fecthCientistasPending, fecthCientistasSuccess, fecthCientistasError } from './redux/actions/cientistas'

function fetchCientistas() {
	return dispatch => {
		dispatch(fecthCientistasPending())
		fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
			.then(res => res.json())
			.then(res => {
				if(res.error) {
					throw (res.error)
				}
				dispatch(fecthCientistasSuccess(res))
			})
			.catch(error => {
				dispatch(fecthCientistasError(error))
			})
	}
}

export default fetchCientistas