import React from 'react'
import Navbar from './Navbar'
import styles from '../scss/technology.modules.scss'


export default function Technology (props) {
  return (
    <div className='container-tech'>
      <Navbar />
      <div className='ez'>
  				<span aria-hidden='true'>01</span>
  				<h5>Pick your destination</h5>
  		</div>
    </div>
  )
}
