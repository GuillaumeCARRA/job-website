import React from 'react';
import NavProfile from '../../components/Navbar/navProfile';

import { 
  FcBriefcase 
} from "react-icons/fc"; 

import './employeeProfile.css';

function JobSeekerProfile() {
  return (
    <div>
      <NavProfile />
      <div className='jobseeker__container'>
        <div className='jobseeker__data'>
          <div className='jobseeker__infos'>
              <div className='jobseeker__header'>
                <div>
                  Bonjour <span className='jobseeker__firstname'>Guillaume !</span>
                </div>
              </div>
              <div className='jobseeker__global'>
                <div className='jobseeker__global__visible'>
                  <span>CV visibile auprès des recruteurs</span>
                  <input type="checkbox" className='input__switch' id="visible" name="visible"/>
                  <label for="visible">
                    <span className='input__switch__button'>

                    </span>
                  </label>
                </div>
                <div className="jobseeker__global__cv"> 
                  <div className='jobseeker__global__cv__seen'>
                    <span>CV vu par</span>
                    <div className="jobseeker__global__cv__seen__number">200</div>
                    <span>recruteurs</span>
                  </div>
                  <div className="jobseeker__global__cv__fields">
                    <div className='jobseeker__global__cv__fields__items'>
                      Poste actuel : <span>test</span>
                    </div> 
                    <div className='jobseeker__global__cv__fields__items'>
                      Lieu de résidence : <span>Choisy-le-roi</span>
                    </div> 
                    <div className='jobseeker__global__cv__fields__items'>
                      Statut : <span>test</span>
                    </div> 
                  </div>
                </div>
              </div>
              <div className='jobseeker__logout-container'>
                <button className='jobseeker__logout'>Se déconnecter</button>
              </div>
          </div>
        </div>
        <div className='jobseeker__cards'>
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default JobSeekerProfile;