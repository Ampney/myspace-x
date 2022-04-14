import { Route, Link, Routes } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Moon from './components/Moon';
import Titan from './components/Titan';



function App() {
  const [destination, setDestination] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/destinations')
    .then(res => {
      return res.json()
    })
    .then (data => {
      setDestination(data);
    })
  }, [] )
  return (
    <>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route index element={  <Home></Home> } />
      <Route path='/Moon.js' element={ <Moon destination={destination}></Moon> } />
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
