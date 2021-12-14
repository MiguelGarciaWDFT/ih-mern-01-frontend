// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react'
import GuitarContext from './GuitarContext'

import GuitarReducer from './GuitarReducer'

const GuitarState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		guitars: [],
		hola: "mundo"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(GuitarReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}


	// 4. RETORNO
	return (
		<GuitarContext.Provider
			value={{
				guitars: globalState.guitars,
				hola: globalState.hola,
				changeText
			}}
		>
			{props.children}
		</GuitarContext.Provider>
	)


}

export default GuitarState