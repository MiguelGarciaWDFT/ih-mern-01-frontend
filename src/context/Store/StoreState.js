
import { useReducer } from 'react'
import StoreContext from './StoreContext'

import StoreReducer from './StoreReducer'

const StoreState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		stores: [],
		hola: "mundo"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(StoreReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}


	// 4. RETORNO
	return (
		<StoreContext.Provider
			value={{
				stores: globalState.stores,
				hola: globalState.hola,
				changeText
			}}
		>
			{props.children}
		</StoreContext.Provider>
	)


}

export default StoreState