import Navbar from './Navbar';
import { react } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Moon.scss';
import Destination from './Destination';
import Europa from './Europa';
import Titan from './Titan';

const Mars = ({destination}) => {
  let moonDetails = destination[0].destinations[1];

return (
  <div className='container-moon'>
    {window.innerWidth <= 425 ? <Hamburger></Hamburger> : <Navbar></Navbar>}
    <div className='ez'><h5>Pick your destination</h5></div>
    <div className='planetSection'>
      <div className='planetImg'><img src='' alt='mars'></img></div>
      <div className='planetInfo'>
        <nav className='navbar-moon'>
          <ul>
            <li><Link to={`/Destination`}>Moon</Link></li>
            <li><Link to={`/Destinaion/Mars`}>Mars</Link></li>
            <li><Link to={`/Destination/Europa`}>Europa</Link></li>
            <li><Link to={`/Destinaion/Titan`}>Titan</Link></li>
          </ul>
        </nav>


        <div className='details'>
          <h2>{moonDetails.name}</h2>
          <p>{moonDetails.description}</p>
          <div className='avg-time'>
            <div className='distance'>
            <p>Avg. distance</p>
            <p>Est. travel time</p>
            </div>
            <div className='time'>
            <p>{moonDetails.distance}</p>
            <p>{moonDetails.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

}

export default Mars;
