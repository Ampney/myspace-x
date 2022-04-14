import Navbar from './Navbar';
import '../scss/home.scss';

const Home = () => {
  const info = 'So, you want to travel to';
  const title = 'Space';
  const text = ' Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover\
   kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'

return (
  <div className='container'>
    <Navbar></Navbar>
    <div className="home-content">
      <div className='home-info'>
        <h5>{ info }</h5>
        <h2>{ title }</h2>
        <p>{ text}</p>
      </div>
      <div className='btns'>
        <button>Explore</button>
      </div>
    </div>
  </div>
  );
}


export default Home;
