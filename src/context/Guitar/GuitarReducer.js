// ./client/src/context/GuitarReducer.js

const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_GUITARS":
			return {
				...globalState,
				guitars: action.payload
			}

		case "CHANGE_TEXT":
			return {
				...globalState,
				mensaje: action.payload
			}


		default:
			return globalState

	}

}

export default reducer