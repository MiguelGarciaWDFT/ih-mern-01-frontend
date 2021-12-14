// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from 'react'
import GuitarContext from './../../context/Guitar/GuitarContext'

export default function Guitars() {

	// ESTADO GLOBAL
	const ctx = useContext(GuitarContext)

	const { guitars, hola, changeText } = ctx


	// ESTADO LOCAL



	return (
		<>
			<p>Listado de guitarras</p>
			<p>{ hola }</p>

			<button onClick={ () => { changeText() } }>
				Cambiar texto
			</button>

		</>
	)
}