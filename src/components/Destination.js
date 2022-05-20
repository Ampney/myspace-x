import { React, useState } from 'react';
import { Routes, Route, Link, useNavigate	} from 'react-router-dom';
import Navbar from './Navbar';
import '../scss/Moon.scss';

const Moon = ({ destination }) => {

	let moon = null;
	if (destination) {
		moon = //for default content}
		<>
		<div className='details' key={destination[0].name}>
		<h2>{destination && destination[0].name}</h2>
		<p>{destination && destination[0].description}</p>
		<div className='avg-time'>
			<div className='distance'>
				<p>Avg. distance</p>
				<p>Est. travel time</p>
			</div>
			<div className='time'>
				<p>{destination && destination[0].distance}</p>
				<p>{destination && destination[0].travel}</p>
			</div>
		</div>
	</div>
	</>
	}
	let [content,setContent] = useState(moon)
	let display = null;

	let planets = ['Moon', 'Mars','Europe','Titan']
	const displayContent= (index)=>{//to change content display
		if (destination) {
			display = <div className='planetImg'><img src={destination[index].images && destination[index].images.webp} alt='moon'></img></div>;
				setContent(
					<>
					<div className='details' key={destination[index].name}>
						<h2>{destination && destination[index].name}</h2>
						<p>{destination && destination[index].description}</p>
						<div className='avg-time'>
							<div className='distance'>
								<p>Avg. distance</p>
								<p>Est. travel time</p>
							</div>
							<div className='time'>
								<p>{destination && destination[index].distance}</p>
								<p>{destination && destination[index].travel}</p>
							</div>
						</div>
					</div>
					</>
				)

			return content
		}
	}

	return (
		<div className='container-moon'>
			<Navbar></Navbar>
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
				{display}
				<div className='planetInfo'>
				{content}
				</div>
			</div>
		</div>
	);
}

export default Moon;
