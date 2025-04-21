import React from "react";

import { NavBar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";
import { Footer } from  "./Footer"

const services = [
	{
		image: './src/img/guarderia.jpeg',
		title: 'Guarderia',
		description: 'Servicio de guarderia para tu peludito de lunes a viernes, tenemos diferentes planes disponibles'
	},
	{
		image: './src/img/hotel.jpeg',
		title: 'Hotel',
		description: 'Servicio de hotel para tu peludito, cuando no lo puedas llevar en Dogvolton puede disfrutar'
	},
	{
		image: './src/img/peluqueria.jpeg',
		title: 'Baño y Peluqueria',
		description: 'Servicio de grooming para que tu peludito luzca su mejor versión'
	},
	{
		image: './src/img/cumpleaños.jpeg',
		title: 'Pasadias',
		description: 'Planes diarios para que tu peludito pueda disfrutar de nuestras actividades'
	}
]

const Home = () => {
	return (
		<>
		<NavBar/>
		<Jumbotron/>
		<div className="card-container d-flex m-4">
		{
			services.map((element, index)=>(
				<Cards key={index} image={element.image} title={element.title} description={element.description}/>
			))
		}
		</div>
		<Footer/>
		</>
	);
};

export default Home;