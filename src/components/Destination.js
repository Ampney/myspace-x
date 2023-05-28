import { React, useState } from 'react';
import { Routes, Route, Link, useNavigate	} from 'react-router-dom';
import Navbar from './Navbar';
import '../scss/Moon.scss';
import Hamburger from './Hamburger';
import { motion } from 'framer-motion';


const Moon = ({ destination }) => {

	let moon = null;
	let moonDetails = destination[0][0].destinations;
	
	if (destination) {
		moon = //for default content}
		<>
		<div className='planetImg'><img src={moonDetails[0].images.webp} alt='moon'></img></div>
		<div className='planetInfo' key={moonDetails[0].name}>
		<h2>{destination && moonDetails[0].name}</h2>
		<p>{destination && moonDetails[0].description}</p>
		<div className='avg-time'>
			<div className='distance'>
				<p>Avg. distance</p>
				<p>Est. travel time</p>
			</div>
			<div className='time'>
				<p>{destination && moonDetails[0].distance}</p>
				<p>{destination && moonDetails[0].travel}</p>
			</div>
		</div>
	</div>
	</>
	}


	let [content,setContent] = useState(moon);
	let planets = ['Moon', 'Mars','Europe','Titan'];

	const displayContent= (index) => {//to change content display
		if (destination) {
				setContent(
					<>
					<div className='planetImg'><img src={moonDetails[index].images && moonDetails[index].images.webp} alt='moon'></img></div>
					<div className='planetInfo' key={moonDetails[index].name}>
						<h2>{moonDetails[index] && moonDetails[index].name}</h2>
						<p>{moonDetails[index] && moonDetails[index].description}</p>
						<div className='avg-time'>
							<div className='distance'>
								<p>Avg. distance</p>
								<p>Est. travel time</p>
							</div>
							<div className='time'>
								<p>{moonDetails[index] && moonDetails[index].distance}</p>
								<p>{moonDetails[index] && moonDetails[index].travel}</p>
							</div>
						</div>
					</div>
					</>
				)

			return content
		}
	}

	return (
		<motion.div className='container-moon'
		initial={{ opacity: 0, y: 1000 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 3 }}>
			{window.innerWidth <= 425 ? <Hamburger></Hamburger> : <Navbar></Navbar>}
			<div className='ez'>
				<span aria-hidden='true'>01</span>
				<h5>Pick your destination</h5>
			</div>
			<div className='planetSection'>
				<nav className='navbar-moon'>
					<ul>
						{planets.map((planet,index) =>{
							return <a onClick={()=> displayContent(index)} key={index}>{planet}</a>
						})}
					</ul>
				</nav>
				{content}
			</div>
		</motion.div>
	);
}

export default Moon;
