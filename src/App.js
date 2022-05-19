import React from 'react';
import { Route , Routes } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import Home from './components/Home';
import Destination from './components/Destination';
import Technology from './components/Technology';
import Crew from './components/Crew';



function App() {
  const [destination, setDestination] = useState('');
  const [moon, setMoon] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/destinations')
    .then(res => {
      return res.json()
    })
    .then (data => {
      setDestination(data);
      setMoon(data)
      console.log(moon)
    })
  }, [] )
  return (
    <>
    <Routes>
      <Route path='/' exact element={  <Home></Home> } />
      <Route path='/Destination' exact element={ <Destination destination={destination} moon={moon}></Destination> } />
      <Route path='/Crew' exact element={ <Crew destination={destination}></Crew>} />
      <Route path='/Technology' exact element={ <Technology destination={destination}></Technology>} />
    </Routes>
    </>
  );
}

export default App;





// <Routes>
//   <Route path='/' element={ <App /> } />
//   <Route index element={  <Home></Home> } />
//   <Route path='/Moon' element={ <Moon destination={destination}></Moon> } />
// </Routes>
