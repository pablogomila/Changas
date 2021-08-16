import { useEffect, useState } from 'react'
import CheckoutBACK from './CheckoutBACK.jsx'
import axios from 'axios';
import { useParams } from "react-router-dom";

function CheckoutTestBACK() {
	const { id } = useParams();
	const [datos, setDatos] = useState("")
	const [order, setOrder] = useState("");

	useEffect(() => {
		// creo que todo esto se puede simplificar en un unico axios.get, pero queda para despues de la demo
		axios
			.get(`http://localhost:3001/testcheckoutback/${id}`)
			.then((data) => {
				setDatos(data.data)
				console.info('Contenido de data:', data)

				axios
					.get(`http://localhost:3001/order/${data.data.id_db}`) // ver si lo toma aca o es null
					.then(data => {
						console.log(data.data)
						setOrder(data.data)
						console.info('La order seteada en el state es: ', order)
					})
					.catch(err => console.error(err));
			})
			.catch(err => console.error(err))

	}, []) // si pongo la dependencia, entra en loop


	return (
		<div className="App">
			{!datos
				? <p>Aguarde un momento....</p>
				: <CheckoutBACK productos={order} data={datos} />
			}
		</div>
	);
}

export default CheckoutTestBACK;