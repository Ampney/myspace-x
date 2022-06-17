import logo from '../scss/logo.svg';
import { Link } from 'react-router-dom'
import hamburger from '../scss/icon-hamburger.svg';
import close from '../scss/icon-close.svg';
import '../scss/hamburger.scss'


export default function Hamburger (){

    let showMenu = true;
    const burger = document.querySelector('div.hamburger > img');
    const mobileMenu = document.querySelector('.menu');
    
    function openHamburger () {
        if (showMenu) {
            burger.style.display = 'none';
            burger.setAttribute('src', close)
            mobileMenu.style.display = 'block';
            showMenu = false;
            console.log(showMenu + ` opened and clicked`);
        } 
    }
    function closeHamburger () {
        if(!showMenu) {
            burger.setAttribute('src', hamburger)
            burger.style.display = 'block';
            mobileMenu.style.display = 'none';
            showMenu = true;
            console.log(showMenu + ` closed and clicked`);
        }
    }
       
     
     
     return (
         <>
         <div className="icons">
            <div className='logo'>
             <img src={logo}></img>
            </div>
            <div className='hamburger' onClick={openHamburger}>
             <img src={hamburger}></img>
            </div>
            <div className='menu'>
                <div className='close' onClick={closeHamburger}>
                    <img src={close} ></img>
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

)
}