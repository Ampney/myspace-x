import '../scss/technology.scss'
import { Icon } from '@iconify/react'
import {useEffect,useState} from 'react';
import React from 'react'
import Navbar from './Navbar'


export default function Technology (props) {
  const [technology,setTechnology] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:5000/technology')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setTechnology(data);
    })
  }, [] )

  let initial = null
  if(technology){
  let initial =
    <>
      <div className='technology-section'>
        <div className='carousel'>
          <Icon className='icon' icon="mdi:numeric-2-circle-outline" />
          <Icon className='icon' icon="mdi:numeric-2-circle-outline" />
          <Icon className='icon' icon="mdi:numeric-3-circle-outline" />
        </div>
        <div className='technology-info'>
          <h4>The Terminology...</h4>
          <h3>{technology && technology[0].name}</h3>
          <p>{technology && technology[0].description}</p>
        </div>
        <div className='technology-image'>
          <img src={technology && technology[0].images.portrait}></img>
        </div>
      </div>
    </>
  }

  let [content, setContent]=useState(initial);
  let carousels = [<Icon className='icon' icon="mdi:numeric-1-circle-outline" />,
                  <Icon className='icon' icon="mdi:numeric-2-circle-outline" />,
                  <Icon className='icon' icon="mdi:numeric-3-circle-outline" />]
    const displayTechnology = (index) => {
      if(technology) {
        setContent(
          <>
              <div className='technology-info' key={technology[index].name}>
                <h4>The Terminology...</h4>
                <h3>{technology && technology[index].name}</h3>
                <p>{technology && technology[index].description}</p>
              </div>
              <div className='technology-image'>
                <img src={technology && technology[index].images.portrait}></img>
              </div>
          </>
        )
        return technology
      }
    }
  return (
    <div className='container-tech'>
      <Navbar></Navbar>
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
    </div>
  )
}
