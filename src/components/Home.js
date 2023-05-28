import Navbar from './Navbar';
import '../scss/home.scss';
import Hamburger from './Hamburger';
import { Link, useHref } from 'react-router-dom';
import { motion } from 'framer-motion';



const Home = () => {
  const info = 'So, you want to travel to';
  const title = 'Space';
  const text = ' Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover\
   kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'

   

return (
  <motion.div className='container'
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}>
    {window.innerWidth <= 425 ? <Hamburger></Hamburger> : <Navbar></Navbar>}
    <div className="home-content">
      <div className='home-info'>
        <h5>{ info }</h5>
        <h2 className=''>{ title }</h2>
        <p>{ text}</p>
      </div>
      <div className='btns'>
          <Link to='/Destination'>
            <button type='button'>
              Explore
              </button>
           </Link>
      </div>
    </div>
  </motion.div>
  );
}


export default Home;
