// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react'
import GuitarContext from './GuitarContext'

import GuitarReducer from './GuitarReducer'

import axiosClient from "./../../config/axios"

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

		dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}

	const getGuitars = async () => {

		const res = await axiosClient.get("guitars/readall")

		console.log("Obteniendo guitarras...")
		
		const list = res.data.data

		dispatch({
			type: "GET_GUITARS",
			payload: list
		})

	}



	// 4. RETORNO
	return (
		<GuitarContext.Provider
			value={{
				guitars: globalState.guitars,
				hola: globalState.hola,
				changeText,
				getGuitars
			}}
		>
			{props.children}
		</GuitarContext.Provider>
	)


}

export default GuitarState