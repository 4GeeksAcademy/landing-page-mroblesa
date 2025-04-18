import React from "react";

import { NavBar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";

const services = [
	{
		image: '/workspaces/landing-page-mroblesa/src/img/dogvolton.jpeg',
		title: 'Guarderia',
		description: 'Servicio de guarderia para tu peludito de lunes a viernes, tenemos diferentes planes disponibles'
	},
	{
		title: 'Hotel',
		description: 'Servicio de hotel para tu peludito, cuando no lo puedas llevar en Dogvolton puede disfrutar'
	},
	{
		title: 'Baño y Peluqueria',
		description: 'Servicio de grooming para que tu peludito luzca su mejor versión'
	},
	{
		title: 'Pasadias',
		description: 'Planes diarios para que tu peludito pueda disfrutar de nuestras actividades'
	}
]
//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<Jumbotron/>
		{
			services.map((element, index)=>{
			return (
				<Cards key={index} image={element.image} title={element.title} description={element.description}/>
			)	
			})
		};
		</>
	);
};

export default Home;