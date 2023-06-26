import React from 'react'; 
import Navbar from '../../components/Navbar';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home__container'>
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
          </section>
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
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                  <div className='home__card'>
                    <div className='home__card-icon'>
                      <i className='fa fa-icon'>test</i> {/* Remplacez "fa-icon" par la classe d'icône souhaitée */}
                    </div>
                    <div className='home__card-content'>
                      <h3 className='home__card-title'>Titre de la carte</h3>
                      <p className='home__card-description'>Description de la carte</p>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section>
            <div className='home__latest'>
              <div className='home__latest-title'>
                <h2 className='home__latest-subtitle'>
                  Nos Dernières <span>Offres.</span>
                </h2>
              </div>
            </div>
          </section>
        </div>
       
    </div>
  )
}

export default Home;