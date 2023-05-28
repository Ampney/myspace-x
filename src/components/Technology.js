import '../scss/technology.scss'
import { Icon } from '@iconify/react'
import {useState} from 'react';
import React from 'react'
import Navbar from './Navbar'
import Hamburger from './Hamburger';
import { motion } from 'framer-motion';


export default function Technology ({ destination }) {

    let tech = null;
    let techDetails = destination[0].technology;


    if( destination ){
        tech =
    <>
        <div className='technology-info'>
          <h4>The Terminology...</h4>
          <h3>{techDetails && techDetails[0].name}</h3>
          <p>{techDetails && techDetails[0].description}</p>
        </div>
        <div className='technology-image'>
        <img alt='img' src={window.innerWidth > 768 ? techDetails && techDetails[0].images.portrait : techDetails && techDetails[0].images.landscape}></img>
        </div>  

    </>
  }

  let [content, setContent]=useState(tech);
  let carousels = [<Icon className='icon' icon="arcticons:number-circle-1" />,
                  <Icon className='icon' icon="arcticons:number-circle-2"/>,
                  <Icon className='icon' icon="arcticons:number-circle-3" />]
    const displayTechnology = (index) => {
      if(destination) {
        setContent(
          <>
             <div className='technology-info' key={techDetails[index].name}>
                <h4>The Terminology...</h4>
                <h3>{techDetails&& techDetails[index].name}</h3>
                <p>{techDetails && techDetails[index].description}</p>
              </div>
              <div className='technology-image'>
                <img alt='img' src={window.innerWidth > 768 ? techDetails && techDetails[index].images.portrait : techDetails && techDetails[index].images.landscape}></img>
              </div>
          </>
        )
      }
    }
  return (
    <motion.div className='container-tech'
                initial={{ opacity: 0, y: 1000 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}>
      {window.innerWidth <= 425 ? <Hamburger></Hamburger> : <Navbar></Navbar>}
      <div className='ez'>
  				<span aria-hidden='true'>03</span>
  				<h5>Space Launch 101</h5>
  		</div>
      <div className='technology-section'>
        <div className='carousel'>
          {carousels.map((carousel,index) =>{
            return <a onClick={()=> displayTechnology(index)} key={index}>{carousel}</a>
         })}
        </div>
        {content}
    </div>
    </motion.div>
  )
}
