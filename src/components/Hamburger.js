import logo from '../scss/logo.svg';
import { Link } from 'react-router-dom'
import hamburger from '../scss/icon-hamburger.svg';
import close from '../scss/icon-close.svg';
import '../scss/hamburger.scss'
import {useState} from 'react';


const Hamburger = () => {

    const [showMenu, setshowMenu] = useState(false);
    const icon = document.querySelector('.menu');

    const handleHamburger = ()=>{
        if (showMenu) {
            icon.style.display = 'block';   
        };
        setshowMenu(true)
        }

    
    return (
        <>
         <div className="icons">
            <div className='logo'>
             <img src={logo} alt='logo'></img>
            </div>
            <div className='hamburger' onClick={handleHamburger}>
             <img src={hamburger} alt='hamburger'></img>
            </div>
            <div className='menu'>
                <div className='close' onClick={handleHamburger}>
                    <img src={close} alt='nav'></img>
                </div>
				<div className="nav-link">
					<ul>
						<li><Link to='/'><span aria-hidden='true'>00</span>Home</Link></li>
						<li><Link to='/Destination'><span aria-hidden='true'>01</span>Destination</Link></li>
						<li><Link to='/Crew'><span aria-hidden='true'>02</span>Crew</Link></li>
						<li><Link to='/Technology'><span aria-hidden='true'>03</span>Technology</Link></li>
					</ul>
				</div>                
            </div>
         </div>
        </>

)}

export default Hamburger;