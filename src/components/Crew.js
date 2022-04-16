import '../scss/crew.scss'
import Navbar from './Navbar'
import { useEffect,useState  } from 'react';

const Crew = ({}) => {
  const [crew, setCrew] = useState('');

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
      <div className='commander-info'>
        <span aria-hidden='true'><h5>{crew && crew[0].role}</h5></span>
        <h3>{crew && crew[0].name}</h3>
        <p>{crew && crew[0].bio}</p>
      </div>
      <div className='commander-image'>
      {crew[0].image && crew[0].image.png}
      </div>
    </div>
    </>

  }
  return (
    <div className='container-crew'>
      <Navbar></Navbar>
      { content }
      <div className='carousel'>
      </div>
    </div>
  );

}

export default Crew;
