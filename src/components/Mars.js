import Navbar from './Navbar';
import { Link, Route } from 'react-router-dom';
import '../scss/Moon.scss';

const Mars = ({destination}) => {


return (
  <div className='container-moon'>
    <Navbar></Navbar>
    <div className='ez'><h5>Pick your destination</h5></div>
    <div className='planetSection'>
      <div className='planetImg'><img src='' alt='mars'></img></div>
      <div className='planetInfo'>
        <nav className='navbar-moon'>
          <ul>
            <li><Route path='/Moon.js'>Moon</Route></li>
            <li><Route path='./Mars.js'>Mars</Route></li>
            <li><Route path='./Europa.js'>Europa</Route></li>
            <li><Route path='./Titan.js'>Titan</Route></li>
          </ul>
        </nav>

    
        <div className='details'>
          <h2>{destination && destination[1].name}</h2>
          <p>{destination && destination[1].description}</p>
          <div className='avg-time'>
            <div className='distance'>
            <p>Avg. distance</p>
            <p>Est. travel time</p>
            </div>
            <div className='time'>
            <p>{destination && destination[1].distance}</p>
            <p>{destination && destination[1].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

}

export default Mars;
