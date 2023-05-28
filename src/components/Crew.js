import '../scss/crew.scss'
import Navbar from './Navbar'
import { useState  } from 'react';
import { Icon } from '@iconify/react'
import Hamburger from './Hamburger';
import { motion } from 'framer-motion';



const Crew = ({ destination }) => {
  
  let content = null;
  let crewDetails = destination[0].crew;

  if (destination) {
    content = 
    <>
        <span aria-hidden='true'>
          <h5>{crewDetails && crewDetails[0].role}</h5></span>
          <h3>{crewDetails && crewDetails[0].name}</h3>
          <p>{crewDetails && crewDetails[0].bio}</p>
        <div className='commander-image'>
          <img alt='img' src={crewDetails.images && crewDetails[0].images.webp}></img>
       </div>
    </>
  }



let [person,setPerson] = useState(content)
let carousels = [<Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />]
const displayCrew = (index) => {
  if (destination) {
    setPerson(
      <>
      {/* <div className='crew_body'> */}
        <div className='commander-info' key={crewDetails[index].name}>
          <span aria-hidden='true'><h5>{crewDetails && crewDetails[index].role}</h5></span>
          <h3>{crewDetails && crewDetails[index].name}</h3>
          <p>{crewDetails && crewDetails[index].bio}</p>
        </div>
        <div className='commander-image'>
        <img alt='img' src={crewDetails[index].images && crewDetails[index].images.webp}></img>
        </div>
      {/* </div> */}
      </>
    )
  }
}

  return (
    <motion.div className='container-crew'
    initial={{ opacity: 0, y: -1000 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
  >
      {window.innerWidth <= 425 ? <Hamburger></Hamburger> : <Navbar></Navbar>}
        <div className='ez'>
  				<span aria-hidden='true'>02</span>
  				<h5>Meet your crew</h5>
  			</div>
    <div className='crew-body'>
      <div className='carousel'>
         {carousels.map((carousel,index) =>{
           return <a onClick={()=> displayCrew(index)} key={index}>{carousel}</a>
        })}
      </div>
        {person}
    </div>
    </motion.div>
  );

}

export default Crew;
