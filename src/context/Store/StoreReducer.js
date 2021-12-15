const reducer = (globalState, action) => {

	switch (action.type) {


		case "GET_STORES":
			return {
				...globalState,
				stores: action.payload
			}

		case "CAMBIAR_TEXTO":
			return {
				...globalState,
				estado: action.payload
			}


		default:
			return globalState

	}

}

export default reducer