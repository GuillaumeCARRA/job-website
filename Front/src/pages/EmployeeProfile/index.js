import React, { useState } from 'react';
import NavProfile from '../../components/Navbar/navProfile';

import './employeeProfile.css';

import { 
  FcBriefcase 
} from "react-icons/fc"; 





function JobSeekerProfile() {

  const [cardOpen, setCardOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const handleCardOpen = () => {
    if (!isEditing) {
      setCardOpen(!cardOpen);
    }
  };

  const handleInputChange = (e) => {
    setIsEditing(!isEditing);
    e.stopPropagation(); // Empêche la propagation du clic à la carte
  };

  const handleSave = () => {
    
    setIsEditing(false);
  

    setCardOpen(false);
  };

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
          <div className='jobseeker__card' onClick={handleCardOpen}>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
              {cardOpen && 
                <div className='jobseeker__form__container'>
                  <div className='jobseeker__form'> 
                    <div className='jobseeker__form__header'>
                      <span className='jobseeker__form__title'>
                        je précise quels sont mes critères de recherches
                      </span>
                      <span className='jobseeker__form__required'> 
                        Tous les champs sont obligatoires
                      </span>
                    </div>
                    <div className='jobseeker__form__field'> 
                      <label className='jobseeker__form__field__title'>
                        Métier(s) recherché(s)
                        <span className='jobseeker__form__required row'>(3 choix maximum)</span>
                      </label>
                      <input name="job" id="job" type="text" placeholder="Développeur web, Data Analyst, Community Manager..." onClick={handleInputChange}/>
                    </div>
                    <div className='jobseeker__form__field'> 
                      <label className='jobseeker__form__field__title'>
                        Localité(s) recherché(s)
                        <span className='jobseeker__form__required row'>(3 choix maximum)</span>
                      </label>
                      <input name="job" id="job" type="text" placeholder="Ville, Département, Région" onClick={handleInputChange}/>
                    </div>
                    <div className='jobseeker__form__field'> 
                      <label className='jobseeker__form__field__title'>
                        Type(s) de contrat
                      </label>
                      <div className='jobseeker__form__contracts' onClick={handleInputChange}> 
                        <input name="cdi" id="cdi" type="checkbox"  />
                        <label for="cdi">CDI</label>
                        <input name="cdd" id="cdd" type="checkbox"  />
                        <label for="cdd">CDD</label>
                        <input name="alternance" id="alternance" type="checkbox"  />
                        <label for="alternance">Alternance</label>
                        <input name="stage" id="stage" type="checkbox"  />
                        <label for="stage">Stage</label>
                        <input name="freelance" id="freelance" type="checkbox"  />
                        <label for="freelance">Freelance</label>
                        <input name="interim" id="interim" type="checkbox" />
                        <label for="interim">Interim</label>
                      </div>
                    </div>
                    <button onClick={handleSave}>Enregister</button>
                  </div>
                </div>
              }
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