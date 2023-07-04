import React from 'react'; 
import Navbar from '../../components/Navbar';

import logo from '../../assets/images/logo.jpg';
import Test from '../../assets/images/test.jpeg'; 

import './home.css';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home__container'>
          {/* SEARCH START */}
          <section>
            <div className='home__bigtitle'> 
              <h1 
                className='home__title'
              >
                Trouver votre emploi à distance en France grâce à <span>DistoJob.</span>
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
            {/* SEARCH END */}
          </section>
         {/* ALL CATEGORIES START */}
          <section>
            <div className='home__solutions'>
              <div className='home__titlesolution'>
                <h2 className='home__subtitle'>
                  Une Plateforme Plusieurs <span>Catégories.</span>
                </h2>
              </div>
                <div className='home__cards'>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> 
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                </div>
            </div>
          {/* ALL CATEGORIES START */}
          </section>
          {/* COMPANY START */}
          <section>
            <div className='home__company'>
              <div className='home__company-title'>
                <h2 
                  className='home__company-subtitle'
                >
                  Les Meilleures <span>Entreprises</span> Pour Votre Prochain <span>Job.</span>
                </h2>
              </div>
              <div className='home__company-cards'>
                <div className='home__company-card'>
                  <img
                    src={Test}
                    alt='Background'
                    className='home__company-card-image'
                  />
                  <div className='home__company-card-details'>
                    <img 
                      src={logo}
                      alt = 'logo entreprise'
                      className='home__company-card-logo'
                    />
                    <h3 className='home__company-card-title'>Company Name</h3>
                    <p className='home__company-card-num-job'>200 jobs</p>
                    <button className='home___company-card-btn'>Voir emplois</button>
                  </div>
                </div>
                <div className='home__company-card'>
                  <img
                    src={Test}
                    alt='Background'
                    className='home__company-card-image'
                  />
                  <div className='home__company-card-details'>
                    <img 
                      src={logo}
                      alt = 'logo entreprise'
                      className='home__company-card-logo'
                    />
                    <h3 className='home__company-card-title'>Company Name</h3>
                    <p className='home__company-card-num-job'>200 jobs</p>
                    <button className='home___company-card-btn'>Voir emplois</button>
                  </div>
                </div>
                <div className='home__company-card'>
                  <img
                    src={Test}
                    alt='Background'
                    className='home__company-card-image'
                  />
                  <div className='home__company-card-details'>
                    <img 
                      src={logo}
                      alt = 'logo entreprise'
                      className='home__company-card-logo'
                    />
                    <h3 className='home__company-card-title'>Company Name</h3>
                    <p className='home__company-card-num-job'>200 jobs</p>
                    <button className='home___company-card-btn'>Voir emplois</button>
                  </div>
                </div>
              </div>
            </div>
            {/* COMPANY END */}
          </section>
          {/* LATEST OFFER START */}
          <section>
            <div className='home__latest'>
              <div className='home__latest-title'>
                <h2 className='home__latest-subtitle'>
                  Nos Dernières <span>Offres.</span>
                </h2>
              </div>
              <div className='home__latest-cards'>
                {/* Card 1 */}
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                    <button className='home__latest-card-button'>
                      Postuler
                    </button>
                  </div>
                </div>
                <div className='home__latest-card'>
                  <div className='home__latest-card-image'>
                    <img
                      src='image-url'
                      alt='Company Logo'
                      className='home__latest-card-image'
                    />
                  </div>
                  <div className='home__latest-card-details'>
                    <h3 className='home__latest-card-company'>Company Name</h3>
                    <h2 className='home__latest-card-jobtitle'>Job Title</h2>
                    <h3 className='home__latest-card-employment'>CDI</h3>
                    <p className='home__latest-card-description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Praesent et nibh tincidunt, lobortis ante quis, sodales mauris. 
                      Nunc dui lectus, luctus sed tempus a, rutrum a sem. 
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                      <button className='home__latest-card-button'>
                        Postuler
                      </button>
                  </div>
                </div>
              </div>
            </div>
            {/* LATEST OFFER END */}
          </section>
        </div>
       
    </div>
  )
}

export default Home;