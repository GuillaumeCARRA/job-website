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
              Trouver votre emploi à distance en France grâce à <span>DistoJob</span>
            </h1>
          </div>
          <div className='home__totaljob'>
            <span className='home__numberjob'>500 offres d'emplois disponibles en ce moment</span>
          </div>
          <div className='home_search'>
            <div className='home_search__input'>
              <input
                className='home_search__input-field'
                type='text'
                placeholder='Rechercher un métier'
              />
            </div>
            <div className='home_search__input'>
              <input
                className='home_search__input-field home_search__input-field--border'
                type='text'
                placeholder='Rechercher une ville'
              />
            </div>
            <button
              className='home_search__btn'
            >
              Rechercher
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home;