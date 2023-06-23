import React from 'react'; 
import Navbar from '../../components/Navbar';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home__container'>
          <div className='home__bigtitle'> 
            <h1 
              className='home__title'
            >
              Trouver votre emploi à distance en France grâce à <span className='home_title--purple'>DistoJob</span>
            </h1>
          </div>
          <div className='home__totaljob'>
            <span className='home__numberjob'>500 offres d'emplois disponibles en ce moment</span>
          </div>
          <div className='home_search'>

          </div>
        </div>
    </div>
  )
}

export default Home;