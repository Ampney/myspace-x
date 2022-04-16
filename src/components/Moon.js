import {  Routes, Route, Link } from 'react-router-dom';
import Mars from './Mars';
import Europa from './Europa';
import Titan from './Titan';
import Navbar from './Navbar';
import '../scss/Moon.scss';

const Moon = ({destination}) => {
let content = null;
let display = null;


if(destination) {
  display =   <div className='planetImg'><img src={destination.images && destination.images.webp} alt='moon'></img></div>;
  content =
  <>
        <div className='details' key={destination[0].name}>
          <h2>{destination && destination[0].name}</h2>
          <p>{ destination && destination[0].description}</p>
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

return (
  <div className='container-moon'>
    <Navbar></Navbar>
    <div className='ez'><span aria-hidden='true'>01</span><h5>Pick your destination</h5></div>
    <div className='planetSection'>
     {  display }
 <div className='planetInfo'>
  <nav className='navbar-moon'>
     <ul>
       <li><Link to='/Moon.js'>Moon</Link></li>
       <li><Link to='/Mars.js'>Mars</Link></li>
       <li><Link to='/Europa.js'>Europa</Link></li>
        <li><Link to='/Titan.js'>Titan</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path='/Moon.js' element={<Moon></Moon>} >
      <Route path='/Moon.js/Mars.js/*' element={<Mars destination={destination}></Mars>}  />
      <Route path='/Moon.js/Europa.js' element={<Europa destination={destination}></Europa>}  />
      <Route path='/Moon.js/Titan.js' element={<Titan destination={destination}></Titan>}  />
    </Route>
  </Routes>

    {content }

      </div>
    </div>
  </div>
  );

}

export default Moon;
