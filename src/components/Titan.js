import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../scss/Moon.scss';

const Titan = ({destination}) => {


return (
  <div className='container-moon'>
    <Navbar></Navbar>
    <div className='ez'><h5>Pick your destination</h5></div>
    <div className='planetSection'>
      <div className='planetImg'><img src='' alt='titan'></img></div>
      <div className='planetInfo'>
        <nav className='navbar-moon'>
          <ul>
            <li><Link to='./Moon.js'>Moon</Link></li>
            <li><Link to='./Mars.js'>Mars</Link></li>
            <li><Link to='./Europa.js'>Europa</Link></li>
            <li><Link to='./Titan.js'>Titan</Link></li>
          </ul>
        </nav>
        <div className='details'>
          <h2>{destination && destination[3].name}</h2>
          <p>{destination && destination[3].description}</p>
          <div className='avg-time'>
            <div className='distance'>
            <p>Avg. distance</p>
            <p>Est. travel time</p>
            </div>
            <div className='time'>
            <p>{destination && destination[3].distance}</p>
            <p>{destination && destination[3].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

}

export default Titan;