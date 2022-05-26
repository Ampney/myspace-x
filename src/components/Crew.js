import '../scss/crew.scss'
import Navbar from './Navbar'
import { useEffect,useState  } from 'react';
import { Icon } from '@iconify/react'


const Crew = () => {

  const [crew, setCrew] = useState(null);


  useEffect(() => {
    fetch('http://localhost:5000/crew')
    .then(res => {
      return res.json()
    })
    .then (data => {
      setCrew(data);
    })
  }, [] )

  let content = null;
  if (crew) {
    content =
    <>
    <div className='crew_body'>
      <div className='commander-info' key={crew[0].name}>
        <span aria-hidden='true'><h5>{crew && crew[0].role}</h5></span>
        <h3>{crew && crew[0].name}</h3>
        <p>{crew && crew[0].bio}</p>
      </div>
      <div className='commander-image'>
      <img src={crew[0].images && crew[0].images.webp}></img>
      </div>
    </div>
    </>
  }

let [person,setPerson] = useState(content)
let carousels = [<Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />,
                <Icon icon="akar-icons:circle" />]
const displayCrew = (index) => {
  if (crew) {
    setPerson(
      <>
      <div className='crew_body'>
        <div className='commander-info' key={crew[index].name}>
          <span aria-hidden='true'><h5>{crew && crew[index].role}</h5></span>
          <h3>{crew && crew[index].name}</h3>
          <p>{crew && crew[index].bio}</p>
        </div>
        <div className='commander-image'>
        <img src={crew[index].images && crew[index].images.webp}></img>
        </div>
      </div>
      </>
    )
    return person
  }
}

  return (
    <div className='container-crew'>
      <Navbar></Navbar>
        <div className='ez'>
  				<span aria-hidden='true'>02</span>
  				<h5>Meet your crew</h5>
  			</div>
      { person }
      <div className='carousel'>
         {carousels.map((carousel,index) =>{
           return <a onClick={()=> displayCrew(index)} key={index}>{carousel}</a>
        })}
      </div>
    </div>
  );

}

export default Crew;
