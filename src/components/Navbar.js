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
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Moon.js'>Destination</Link></li>
        <li><Link to='#'>Crew</Link></li>
        <li><Link to='#'>Technology</Link></li>
      </ul>
    </div>
    </div>
</nav>
    );

}

export default Navbar;
