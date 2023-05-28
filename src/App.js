import React from 'react';
import axios from 'axios';
import { Route , Routes } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import Home from './components/Home';
import Destination from './components/Destination';
import Technology from './components/Technology';
import Crew from './components/Crew';



function App() {
  const baseURL = "https://64611033491f9402f49dca39.mockapi.io/myspacex";
  const [destination, setDestination] = useState(null);
  
  useEffect(() => {
    axios.get(baseURL)
    .then (data => {
      setDestination(data.data);
    })
  },[])


  if (!destination) return null;
  return (
    <>
    <Routes>
      <Route path='/' exact element={  <Home></Home> } />
      <Route path='/Destination' exact element={ <Destination destination={[destination]}></Destination> } />
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
