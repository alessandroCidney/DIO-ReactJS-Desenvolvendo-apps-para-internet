export const FETCH_CIENTISTAS_PENDING = "FETCH_CIENTISTAS_PENDING"
export const FETCH_CIENTISTAS_SUCCESS = "FETCH_CIENTISTAS_SUCCESS"
export const FETCH_CIENTISTAS_ERROR = "FETCH_CIENTISTAS_ERROR"

export function fecthCientistasPending() {
	return (
		type: FETCH_CIENTISTAS_PENDING
	)
}

export function fecthCientistasSuccess(cientistas) {
	return {
		type: FETCH_CIENTISTAS_SUCCESS,
		cientistas: cientistas
	}
}

export function fecthCientistasError() {
	return {
		type: FETCH_CIENTISTAS_ERROR,
		error: error
	}
}