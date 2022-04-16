import { Link } from 'react-router-dom';
import '../scss/navbar.scss';
import logo from '../scss/logo.svg';

const Navbar = () => {

return (
<nav className="navbar">
  <div className="navbar-brand">
    <img src={logo} alt='star'></img>
  </div>
  <div className='navbar-parent'>
    <div className="navbar-link">
      <ul>
        <li><Link to='/'><span aria-hidden='true'>00</span>Home</Link></li>
        <li><Link to='/Moon.js'><span aria-hidden='true'>01</span>Destination</Link></li>
        <li><Link to='./Crew.js'><span aria-hidden='true'>02</span>Crew</Link></li>
        <li><Link to='#'><span aria-hidden='true'>03</span>Technology</Link></li>
      </ul>
    </div>
    </div>
</nav>
    );

}

export default Navbar;
