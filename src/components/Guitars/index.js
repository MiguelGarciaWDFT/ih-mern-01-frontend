// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from 'react'
import GuitarContext from './../../context/Guitar/GuitarContext'

export default function Guitars() {

	// ESTADO GLOBAL
	const ctx = useContext(GuitarContext)

	const { 
		guitars, mensaje,changeText, getGuitars } = ctx

	// ESTADO LOCAL

	return (
		<>
			<p>Listado de guitarras</p>
			 <p>{ mensaje }</p>

			<button onClick={ () => { changeText() } }>
				Cambiar texto
			</button> 

			<button onClick={() => { getGuitars() } }>
				Listar guitarras
			</button>

			<div>
				<h2>Listado de Guitarras</h2>

				<ul>
					{
						guitars.map((element) => {
							return (
								<li key={element._id}>
									<p>{element.nombre}</p>
									<p>{element.precio}</p>
								</li>
							)
						})
					}
				</ul>

			</div>

		</>
	)
}